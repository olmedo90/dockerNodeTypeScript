import { Request, Response } from "express";
import comentModel from "../models/comentModel";
import ComentModel from '../models/comentModel';

class ComentController {
    //leer
    public async getComents (req:Request, res : Response){
        try {
            const coments = await ComentModel.find({});
            res.json(coments);
            
        } catch (error) {
            console.log(error);
        }
    }
    //insertar
    public async postComent(req:Request, res : Response){
        const body=req.body;
        console.log(body);
        try {
            const comentariosDB = new comentModel(body);
            await comentariosDB.save();
            res.send('se inserto correctamente')
        } catch (error) {
            console.log(error);
        }
    }
    //delete'
    public async deleteComent(req:Request, res : Response){
        const id = req.params.id;
        console.log(id);
        try{
            const comentarioDB = await comentModel.findByIdAndDelete({_id:id});
            if(comentarioDB){
                
                res.send('eliminado correctamente') 

            }else{
                res.send('error al eliminar coment');
            }
        }catch (error) {
            console.log(error);
        }
    }
    //update
    public async updateComent(req:Request, res : Response){
        const id = req.params.id;
        const body=req.body;
        try {
        
            const comentarioDB= await comentModel.findByIdAndUpdate(id, body);
            if(comentarioDB){
            res.send('el comentario se edito exitosamente');

            }else{
                res.send('error al editar comentario');
            }

        } catch (error) {
            console.log(error);

        }
    }
    
}
export const comentController =  new ComentController()