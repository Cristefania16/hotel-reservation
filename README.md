# HOTEL-RESERVATION

## Descripción
Este proyecto es una solución al desafío de reservación de hoteles, el cual permite a los usuarios ingresar su tipo de cliente (Regular o Recompensas) y un conjunto de fechas para encontrar el hotel más económico disponible, teniendo en cuenta las tarifas diferenciadas por día de la semana y calificaciones de los hoteles.

## Estructura del Proyecto
````bash
hotel-reservation/
│
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│
└── README.md
````

- src/: Contiene el código fuente del proyecto.
  - index.html: Archivo HTML que presenta la interfaz de usuario.
  - styles.css: Archivo de estilos para la maquetación de la página.
  - script.js: Archivo JavaScript que contiene la lógica de la aplicación.
- README.md: Este archivo, que contiene la descripción del proyecto, instrucciones y detalles adicionales.

## Instalación
1. Clona el repositorio en tu máquina local:
   - Abre git bash
   - Selecciona la carpeta o ruta donde clonar el repositorio.
2. Coloca la siguiente linea de comandos para que se clone el repositorio en la ruta seleccionada.
     	````bash
	git clone https://github.com/Cristefania16/hotel-reservation.git
	````
3. Navega al directorio del proyecto:
	````bash
	cd hotel-reservation
	````

No se requieren dependencias adicionales ya que el proyecto está basado en HTML, CSS y JavaScript puro.

## Ejecución
1. Abre el archivo index.html en tu navegador web preferido.
2. En la página principal, selecciona el tipo de cliente y las fechas deseadas.
3. Haz clic en "Buscar Hotel" para ver la mejor opción disponible.

## Diseño de la Solución
La aplicación se ha desarrollado utilizando JavaScript para la lógica, HTML para la estructura y CSS para la maquetación. El diseño sigue una arquitectura modular para facilitar su mantenimiento y extensión.

### Suposiciones
- Se asume que los usuarios ingresarán las fechas en el formato ddMmmYYYY, en el mes debe ser ingresado las 3 primeras letras del sea en ingles o español.
- Los hoteles y sus tarifas están predefinidos y no cambian dinámicamente.

### Lógica
- La lógica principal se encuentra en script.js, donde se manejan las tarifas de los hoteles en función del tipo de cliente y las fechas seleccionadas.
- Se prioriza el hotel con menor costo, y en caso de empate, se selecciona el hotel con mejor calificación.

## Pruebas:
### Datos de Prueba
- Regular:  16Mar2009, 17Mar2009, 18Mar2009 debería devolver "Lakewood".
- Recompensas: 26Mar2009, 27Mar2009, 28Mar2009 debería devolver "Ridgewood".

### ¿Cómo realizar pruebas?
- Ingresa los datos de prueba anteriores en la interfaz de usuario y verifica si el resultado es el esperado.

## Referencias
- No se han utilizado elementos externos que no sean de mi autoría. Todos los scripts, HTML y CSS han sido desarrollados desde cero para este proyecto.

## Autor: 
- Nombre: Cristina Estefanía Alvarado Pérez 
- Email: calvaradop2012@gmail.com
