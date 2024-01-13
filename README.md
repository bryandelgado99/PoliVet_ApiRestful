# Sistema de Gestión Veterinaria | Poli-Vet

## Introducción

## Antes de empezar...

## Instalación
Primero, clona el proyecto mediante Git con el siguiente comando:
~~~
git clone https://github.com/bryandelgado99/PoliVet----Api__APP.git
~~~

> [!NOTE]
> Se tiene que clonar el repositorio sin crear una carpeta previa, o si se la crea, se debe referenciar esta dentro del direcotrio.

## Conoce el proyecto
### Árbol de trabajo
```
└── 📁PoliVet----Api__APP
    └── .env
    └── .env.example
    └── .gitignore
    └── 📁images
        └── actualización-perfil.png
        └── act_pass.png
        └── aplicación de JWT.png
        └── atlas.png
        └── compass.png
        └── confirmacion.png
        └── login.png
        └── maik.png
        └── mail_confirmacion.png
        └── new-pass.png
        └── no-verificacion.png
        └── rec-pass.png
        └── registro.png
        └── token-pass-rec.png
        └── validacion_datos.png
    └── package-lock.json
    └── package.json
    └── README.md
    └── 📁src
        └── 📁config
            └── nodemailer.js
        └── 📁controllers
            └── veterinario_controller.js
        └── database.js
        └── 📁helpers
            └── crearJWT.js
        └── index.js
        └── 📁middlewares
            └── autenticacion.js
            └── validacionVeterinario.js
        └── 📁models
            └── Veterinario.js
        └── 📁routers
            └── veterinario_routes.js
        └── server.js
```

## Variables de entorno
Este proyecto contempla diferentes variables de entorno para poder utilizar el programa. Las variables de entorno son elementos informáticos que guardan información sensible.
Visualiza el archivo [env.example](.env.example) para identificar las variables de entorno, su estructura y que elementos se necesitan para utilizarlas.

## Funcionamiento (en desarrollo)
