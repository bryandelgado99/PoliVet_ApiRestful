import mongoose from 'mongoose'

const mongo_uri = "mongodb://0.0.0.0:27017/vet"

mongoose.set('strictQuery', true)   
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.COMPASS_URI || mongo_uri)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}

export default  connection