import mongoose, {Schema,model} from 'mongoose'
import verificarAutenticacion from "../middlewares/autenticacion.js";

const tratamientoSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true
    },
    estado:{
        type:Boolean,
        require:true,
        default:true
    },
    prioridad:{
        type:String,
        require:true,
        enum:['Baja','Media','Alta']
    },
    paciente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Paciente'
    }
},{
    timestamps:true
})

export default model('Tratamiento',tratamientoSchema)