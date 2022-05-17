import { Request, Response } from "express";

class IndexController {
    public index (req:Request, res : Response){
        res.send('hola mundo desde rutas')
    }
}
export const indexController =  new IndexController()