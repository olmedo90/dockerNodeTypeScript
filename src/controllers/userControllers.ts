import {Request, Response} from 'express';
import usersModel from '../models/usersModel';
import UserModel from '../models/usersModel';

class UserController{
    //mostrar
   public async getUsers(req:Request, res : Response){
        try {
           const users= await UserModel.find({});
          res.json(users);
            
        } catch (error) {
            console.log(error);
        }
    }
    //insertar
    public async postUser(req: Request, res: Response){
        const body = req.body;
        try {
            const userDb = new UserModel(body);
            await userDb.save();
            res.send('se inserto users exitosamente');
        } catch (error) {
            console.log(error);
        }
    }
    //editar
    public async getOneUser(req: Request, res: Response){
        try {
            const id=req.params.id;
            const userDB = await UserModel.findOne({_id:id});
            res.json({
                user: userDB,
                error: false
            })
        } catch (error) {
            console.log(error);
            res.json({
                error:   true,
                sms:"el usuario no existe"

            })
        }
    }
    public async putUser(req: Request, res: Response){
        const id= req.params.id;
        const body= req.body;
        try {
            await UserModel.findByIdAndUpdate(id, body);
            res.json({
                error:  false,
                sms:"exitoso"

            })
            
        } catch (error) {
            console.log(error);
            res.json({
                error:   true,
                sms:"facaso al editar usuario"

            })
        }
    }

    //eliminar
    public async deleteUser(req: Request, res: Response){
        const id = req.params.id;
        try {
           await usersModel.findByIdAndDelete({_id: id});
            res.json({
                error:  false,
                sms:"se elimino corractamente"

            })
        } catch (error) {
            console.log(error);
            res.json({
                error:   true,
                sms:"facaso al eliminar usuario"

            })
        }
    }
}
export const usersController = new UserController();