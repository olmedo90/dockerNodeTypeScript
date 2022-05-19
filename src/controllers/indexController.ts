import { Request, Response } from "express";

class IndexController {
    public index (req:Request, res : Response){
        res.json({ "nombre":'edson olmedo'})
    }
}
export const indexController =  new IndexController()