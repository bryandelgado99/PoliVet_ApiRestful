# Sistema de Gestión Veterinaria | Poli-Vet

## Introducción
Este proyecto presentauna aplicación tipo Backend que ofrece un servicio de veterinaria. Consta de apartado de Veterinario, Paciente y tratamiento. Esta app es desarrollada para su consumo denro del framework de React y crear un aplicativo API RESTful.

## Instalación
Primero, clona el proyecto mediante Git con el siguiente comando:
~~~
git clone https://github.com/bryandelgado99/PoliVet----Api__APP.git
~~~

> [!NOTE]
> Se tiene que clonar el repositorio sin crear una carpeta previa, o si se la crea, se debe referenciar esta dentro del direcotrio.

## Manejo de variables
Este proyecto contempla diferentes variables de entorno para poder utilizar el programa. Las variables de entorno son elementos informáticos que guardan información sensible.
Visualiza el archivo [env.example](.env.example) para identificar las variables de entorno, su estructura y que elementos se necesitan para utilizarlas.

## Funcionamiento
> [!IMPORTANT]
> Para acceder al apartado de paciente y tratamiento, se necesita del Token generado al registrar el veterinario. Sin esto, no se puede reaizar ninguna actividad en el sistema.

#### Apartado de Veterinario
- En este apartado se agrega al sistema un veterianario (todos los datos de este) y se entrega un token. 
- Este token será útil para la autorización de tratamientos de datos y accesos a diferentes apartados del aplicativo. 

##### Listado de vistas y rutas
- ###### Ruta de Registro
Método: POST
>> Enlace: /registro
![]()

- ###### Ruta de Login
Método: POST
>> Enlace: /login
![]()

- ###### Ruta de Confirmación de correo
Método: GET
>> Enlace: /confirmar/:token
![]()

- ###### Ruta de Lista de Veterinarios
Método: GET
>> Enlace: /veterinarios
![]()

- ###### Ruta de Recuperar contraseña
Método: POST
>> Enlace: /recuperar-password
![]()

- ###### Ruta de Comprobar Token de contraseña
Método: GET
>> Enlace: /recuperar-password/:token
![]()

- ###### Ruta de Nueva contraseña
Método: POST
>> Enlace: /nuevo-pasword/:token
![]()

- ###### Ruta de Perfil de veterinario
Método: GET
>> Enlace: /perfil
![]()

- ###### Ruta de Actualizar contraseña
Método: PUT
>> Enlace: /veterinario/actualizarpassword
![]()

- ###### Ruta de Detalle del veterinario
Método: GET
>> Enlace: /veterinario/:id

- ###### Ruta de Actualizar perfil del veterinario
Método: PUT
>> Enlace: /veterinario/:id
![]()

#### Apartado de Paciente
- En este apartado, cada veterinario debe ingresar al sistema su paciente (la primera vez). Se le generará una contraseña, que deberá ser cambiada para el acceso posterior del paciente al sistema.

- ###### Ruta de Login del paciente
Método: POST
>> Enlace: /paciente/login
![]()

- ###### Ruta de Registro del paciente
Método: POST
>> Enlace: /paciente/registro
![]()

- ###### Ruta de Listado de paciente (por veterinario)
Método: GET
>> Enlace: /pacientes
![]()

- ###### Ruta de Detalle del paciente 
Método: GET
>> Enlace: /paciente/:id

- ###### Ruta de Perfil del paciente
Método: GET
>> Enlace: /paciente/perfil
![]()

- ###### Ruta de Actualizar perfil del paciente
Método: PUT
>> Enlace: /paciente/actualizar/:id
![]()

- ###### Ruta de Eliminar Paciente
Método: DELETE
>> Enlace: /paciente/eliminar/:id
![]()

### Apartado de Tratamiento