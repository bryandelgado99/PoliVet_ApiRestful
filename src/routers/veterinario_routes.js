import {Router} from 'express'

const router = Router()

/*outer.post('/login',(req,res)=>res.send("login"))

router.post('/registro',(req,res)=>res.send("registro"))

router.get('/confirmar/:token',(req,res)=>res.send("confirmar email"))

router.get('/veterinarios',(req,res)=>res.send("lista de veterinarios"))

router.get('/recuperar-password',(req,res)=>res.send("enviar mail"))

router.get('/recuperar-password/:token',(req,res)=>res.send("verificar token"))

router.post('/nuevo-password/:token',(req,res)=>res.send("crear password"))

router.get('/perfil',(req,res)=>res.send("perfil"))

router.put('/veterinario/actualizarpassword',(req,res)=>res.send("actualizar password"))

router.get('/veterinario/:id',(req,res)=>res.send("detalle del veterinario"))

router.put('/veterinario/:id',(req,res)=>res.send("actualizar perfil"))*/

import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

router.post("/login", login);
router.post("/registro", registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

router.get("/perfil", perfil);
router.put('/veterinario/actualizarpassword',actualizarPassword)
router.get("/veterinario/:id", detalleVeterinario);
router.put("/veterinario/:id", actualizarPerfil);

export default router

