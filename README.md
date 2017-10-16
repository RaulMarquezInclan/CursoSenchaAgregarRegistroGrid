# CursoSenchaAgregarRegistroGrid
Fuentes del curso de Sencha ExtJs AgregarRegistroGrid.

<h3>REQUERIMIENTOS TECNICOS</h3>

Visual Studio Code (o IDE preferido)
- https://code.visualstudio.com/
	
NodeJS (npm (current))
- https://nodejs.org/en/
- Modulo json-server (npm install -g json-server)
	
WinRar
- http://www.rarlab.com/download.htm

<h3>PREPARAR AMBIENTE PARA SENCHA</h3>

Visitar la pagina de version de evaluacion de Sencha ExtJS:
https://www.sencha.com/products/extjs/evaluate/

- Llenar la forma con la informacion requerida
- Se mandara al correo especificado la liga de descarga para el framework ExtJS
- Descargar ExtJS

<p>Descargar Sencha Cmd de la siguiente liga:</p>
https://www.sencha.com/products/extjs/cmd-download/
- Instalar Sencha Cmd con opciones default
- Agregar la ruta C:\Users\{nombreUsuario}\bin\Sencha\Cmd a las variables de entorno (Path)

<p>Descomprimir framework ExtJS en la ruta C:\Users\{nombreUsuario}\bin\Sencha\Cmd</p>

<h3>CREAR APLICACION INICIAL</h3>

Crear carpeta "cursosencha" en el escritorio

En la consola de comandos (cmd o dentro de VSC) posicionarse en la carpeta recien creada

Ejecutar los siguientes comandos:

sencha -sdk C:/Users/Raul/bin/Sencha/Cmd/6.5.0.180 generate app CA ./ -classic
	
(Copia el framework a la carpeta de la aplicacion a desarrollar, ademas genera la estructura de archivos, carpetas y configuraciones iniciales, tambien una aplicacion demo. La opcion "-classic" especifica que se utilizara la version para escritorio (en lugar de la version mobil, la cual se especifica con "-modern"))
	
sencha app build
	
(Genera el codigo HTML, JavaScript y CSS resultante en la carpeta "build")
	
sencha app watch
	
(Habilita la ejecucion de la aplicacion, lanza un servido sencillo, la URL default es http://localhost:1841/. Tambien al estar en ejecucion detecta cambios hechos en el codigo)
	
Entrar a la URL http://localhost:1841/ en el navegador para mostrar la aplicacion demo

<h3>DESCRIPCION DE LA PRACTICA</h3>

- Desarrollar una forma para captura de informacion de albums de musica
- Desarrollar un grid donde se muestre un listado de albums de musica
- Desarrollar funcionalidad para limpiar los campos de la forma
- Mostrar mesnaje de validacion al no capturar los campos requeridos de la forma
- Desarrollar funcionalidad para agregar el album capturado en la forma al grid
- Desarrollar funcionalidad para cargar un album seleccionado del grid en la forma

TEMAS A TOCAR

- Herencia
- Componentes
- Eventos
- ViewController
- Comunicacion entre componentes
- Carga de datos
- Ajax
- JSON

Sencha ExtJS

Es un framework diseñado para aplicaciones basadas en la web de clase empresarial con una interfaz de usuario de estilo de escritorio.
