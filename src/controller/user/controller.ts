import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../../entity/User";
export class UserController{
    private userRepository = getRepository(User);

    public async all(request:Request,response:Response,next:NextFunction)
    {
        return this.userRepository.find();
    }

    public async findOne(request:Request,response:Response,next:NextFunction)
    {
        return this.userRepository.findOne(request.params.id);
    }

    public async create(request:Request,response:Response,next:NextFunction)
    {
        return this.userRepository.save(request.body);
    }

    public async delete(request:Request,response:Response,next:NextFunction)
    {
        let removeUser= await this.userRepository.findOne(request.params.id);
        return await this.userRepository.remove(removeUser);
    }
}