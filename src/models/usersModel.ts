import mongoose,{Schema, models, model, Mongoose} from 'mongoose';

export interface User extends mongoose.Document {
    nombre: string,
    apellidos: string,
    usuario: string,
    pw: string,
    correo?: string

}


const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    usuario: String,
    pw : String,
    correo: String,
});
export default model<User>('users', userSchema )