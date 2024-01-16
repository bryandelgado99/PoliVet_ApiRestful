// Requerir los módulos
import * as dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import routerVeterinarios from './routers/veterinario_routes.js'
import routerPacientes from './routers/pacientes_routes.js'

// Inicializaciones
const app = express();

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales



// Rutas 
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Exportar la instancia de express por medio de app
export default app