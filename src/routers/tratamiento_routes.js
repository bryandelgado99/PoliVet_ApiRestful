import {Router} from 'express'
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';

const router = Router()

import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";


router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)
router
    .route('/tratamiento/:id')
    .get(verificarAutenticacion,detalleTratamiento)
    .put(verificarAutenticacion,actualizarTratamiento)
    .delete(verificarAutenticacion,eliminarTratamiento)

router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)

export default router