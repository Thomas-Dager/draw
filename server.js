// TRAZO IA — Servidor Local y Motor de Búsqueda de Imágenes Web en Vivo (Estilo Google Imágenes)
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
}

// 1. Búsqueda directa de imágenes web en alta resolución (Bing Web Images Photo Filter)
async function searchBingWebImages(query, count = 35) {
  const searchUrl =
    `https://www.bing.com/images/async?q=${encodeURIComponent(query)}` +
    `&first=0&count=${count}&adlt=strict&qft=+filterui:photo-photo`;

  const res = await fetch(searchUrl, {
    headers: {
      "User-Agent": BROWSER_UA,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "es-ES,es;q=0.9,en;q=0.8"
    }
  });

  if (!res.ok) return [];
  const html = await res.text();
  const mBlocks = [...html.matchAll(/m="(\{[^"]+\})"/g)];
  const results = [];

  for (const match of mBlocks) {
    try {
      const jsonStr = match[1]
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'");
      const data = JSON.parse(jsonStr);
      if (!data.murl && !data.turl) continue;

      const cleanTitle = String(data.t || data.desc || query)
        .replace(/[\uE000-\uF8FF]/g, "")
        .replace(/\s+/g, " ")
        .trim();

      results.push({
        url: data.murl || data.turl,
        thumb: data.turl || data.murl,
        fallbackUrl: data.turl || data.murl,
        title: cleanTitle,
        source: data.purl || data.murl || data.turl,
        badge: "🔎 Web / Google"
      });
    } catch (_) {}
  }

  return results;
}

// 2. Búsqueda complementaria en DuckDuckGo Web Images
async function searchDuckDuckGoWebImages(query) {
  try {
    const initUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`;
    const r1 = await fetch(initUrl, {
      headers: { "User-Agent": BROWSER_UA }
    });
    if (!r1.ok) return [];
    const html = await r1.text();
    const vqdMatch = html.match(/vqd=['"]?([0-9-]+)['"]?/);
    if (!vqdMatch) return [];

    const apiUrl =
      `https://duckduckgo.com/i.js?l=es-es&o=json&q=${encodeURIComponent(query)}` +
      `&vqd=${encodeURIComponent(vqdMatch[1])}&f=,type:photo,,&p=1`;

    const r2 = await fetch(apiUrl, {
      headers: {
        "User-Agent": BROWSER_UA,
        "Referer": "https://duckduckgo.com/"
      }
    });
    if (!r2.ok) return [];
    const data = await r2.json();

    return (data.results || []).slice(0, 30).map((item) => ({
      url: item.image || item.thumbnail,
      thumb: item.thumbnail || item.image,
      fallbackUrl: item.thumbnail || item.image,
      title: String(item.title || query).trim(),
      source: item.url || item.image,
      badge: "🔎 Web / Google"
    })).filter((x) => Boolean(x.url));
  } catch (_) {
    return [];
  }
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  // Endpoint 1: /api/web-images?q=...&q_en=...
  if (pathname === "/api/web-images") {
    const qPrimary = (parsedUrl.searchParams.get("q") || "").trim();
    const qSecondary = (parsedUrl.searchParams.get("q_en") || "").trim();

    if (!qPrimary && !qSecondary) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Parámetro q requerido", results: [] }));
      return;
    }

    try {
      const [primaryBing, secondaryBing, ddgRes] = await Promise.all([
        qPrimary ? searchBingWebImages(qPrimary, 35) : Promise.resolve([]),
        qSecondary && qSecondary.toLowerCase() !== qPrimary.toLowerCase()
          ? searchBingWebImages(qSecondary, 25)
          : Promise.resolve([]),
        searchDuckDuckGoWebImages(qPrimary || qSecondary)
      ]);

      // Combinar sin duplicados priorizando la consulta principal en español + consulta exacta en inglés + DDG
      const combined = [];
      const seen = new Set();

      const maxLen = Math.max(primaryBing.length, secondaryBing.length, ddgRes.length);
      for (let i = 0; i < maxLen; i++) {
        for (const list of [primaryBing, ddgRes, secondaryBing]) {
          if (i < list.length) {
            const item = list[i];
            const key = item.url.split("?")[0];
            if (item && item.url && !seen.has(key)) {
              seen.add(key);
              combined.push(item);
            }
          }
        }
      }

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ query: qPrimary || qSecondary, count: combined.length, results: combined }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: String(err.message || err), results: [] }));
    }
    return;
  }

  // Endpoint 2: Proxy de imagen para evitar bloqueo por hotlinking (Referer)
  if (pathname === "/api/image-proxy") {
    const targetImgUrl = parsedUrl.searchParams.get("url");
    if (!targetImgUrl || !/^https?:\/\//i.test(targetImgUrl)) {
      res.writeHead(400);
      res.end("URL inválida");
      return;
    }

    try {
      const imgRes = await fetch(targetImgUrl, {
        headers: {
          "User-Agent": BROWSER_UA,
          "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
        }
      });

      if (!imgRes.ok) {
        res.writeHead(imgRes.status);
        res.end();
        return;
      }

      const contentType = imgRes.headers.get("content-type") || "image/jpeg";
      const arrayBuf = await imgRes.arrayBuffer();
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400"
      });
      res.end(Buffer.from(arrayBuf));
    } catch (_) {
      res.writeHead(502);
      res.end();
    }
    return;
  }

  // Servir archivos estáticos de la app
  let safePath = pathname === "/" ? "/index.html" : pathname;
  safePath = path.normalize(safePath).replace(/^(\.\.[\/\\])+/, "");
  const filePath = path.join(ROOT_DIR, safePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`TRAZO IA Server activo en http://localhost:${PORT}`);
});
