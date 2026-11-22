' Lanzador silencioso de TRAZO IA (sin ventana negra de consola)
Set fso = CreateObject("Scripting.FileSystemObject")
Set shell = CreateObject("WScript.Shell")
appDir = fso.GetParentFolderName(WScript.ScriptFullName)

' Inicia server.js en segundo plano de forma 100% oculta (0 = ventana invisible)
shell.CurrentDirectory = appDir
shell.Run "node """ & appDir & "\server.js""", 0, False

' Espera 600ms y abre la app en el navegador predeterminado
WScript.Sleep 600
shell.Run "http://localhost:3000"
