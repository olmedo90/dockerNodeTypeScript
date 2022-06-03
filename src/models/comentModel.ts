import mongoose,{Schema, model} from "mongoose";

export interface Coment extends mongoose.Document {
    author: string;
    comentario: string;

}

const ComentSchema = new Schema({
    author: String,
    comentario: String 
});

export default model<Coment>('comentariossis719', ComentSchema);