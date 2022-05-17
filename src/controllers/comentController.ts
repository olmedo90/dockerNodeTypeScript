import { Request, Response } from "express";

class ComentController {
    //leer
    public index (req:Request, res : Response){
        res.send('soy un comentario')
    }
    //insertar
    //delete
    
}
export const comentController =  new ComentController()