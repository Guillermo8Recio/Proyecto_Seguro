## Ejecución del Secure SDLC.
1. Planificación
Se eligió la aplicación base "To-Do App" del tutorial de Docker por su sencillez y facilidad para aplicar buenas prácticas de seguridad. Se estableció como objetivo mejorar la seguridad de la aplicación en todas las fases de su ciclo de vida.

2. Análisis de Requisitos
Se identificaron los principales riesgos de seguridad: falta de validación de datos, ejecución del contenedor como root, falta de gestión adecuada de variables sensibles, y necesidad de separación de servicios.

3. Diseño Seguro
Se diseñó una estructura de proyecto que incluye:

Separación de código, documentación y configuración.

Uso de variables de entorno gestionadas en un archivo .env.

Configuración segura de contenedores Docker.

Creación de un archivo .dockerignore para evitar inclusión de archivos sensibles en la imagen.

4. Implementación Segura
Se implementaron las mejoras:

Modificación del Dockerfile para ejecutar como un usuario no-root.

Uso de docker-compose.yml para separar servicios de aplicación y base de datos.

Manejo seguro de las configuraciones mediante .env.

Evitar inclusión de archivos innecesarios gracias a .dockerignore.

5. Pruebas de Seguridad
Se realizaron pruebas manuales de despliegue usando docker-compose up, revisando los logs (docker-compose logs) para asegurar que no existieran errores de configuración ni vulnerabilidades evidentes.

6. Despliegue Seguro
Se documentó la correcta ejecución del entorno de manera controlada en contenedores aislados, minimizando riesgos de fuga de datos o ejecución de código inseguro.

7. Mantenimiento y Actualización
Se dejó preparado el entorno para futuras mejoras:

Posibilidad de añadir herramientas de análisis estático.

Mejora de validaciones de entrada en el código de la aplicación.

Actualización continua de imágenes Docker a versiones seguras.
## ¿Cómo ejecutar la aplicación?
Para ejecutar la aplicación de forma local, debemos tener Docker y Docker Compose previamente instalados.

Desde la raíz del proyecto, utilizar el siguiente comando:

docker-compose up --build

La aplicación estará disponible en http://localhost:3000.
## Seguridad Aplicada
Durante el desarrollo de este proyecto se han aplicado las siguientes prácticas de seguridad:

Uso de contenedores seguros: el Dockerfile ha sido modificado para ejecutar la aplicación con un usuario no-root.

Gestión segura de configuraciones sensibles utilizando un archivo .env.

Separación de servicios mediante docker-compose (aplicación y base de datos Redis en contenedores distintos).

Creación de un archivo .dockerignore para excluir archivos sensibles y de desarrollo del contenedor final.

Preparación de la aplicación para futuros análisis de seguridad (análisis estático, validaciones de entrada, actualizaciones de imágenes).