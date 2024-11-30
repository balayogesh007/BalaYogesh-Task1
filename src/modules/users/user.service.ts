import { CreateUserInput } from "./dto/create-user.input";
import { User } from "../../../models/user.entity";

export class UserService{
    constructor(){}

    async createUser(createUserInput: CreateUserInput){
        return User.create({...createUserInput})
    }

    async getAllUserDetails(pageNo: number, perPage: number){
        return User.findAll({offset: (pageNo - 1) * perPage,limit: perPage})
    }

    async getUserDetailsById(id: string){
        return User.findOne({where:{id: id}});
    }

    async deleteUserDetail(id: string){
        return User.destroy({where: {id: id}});
    }
}
