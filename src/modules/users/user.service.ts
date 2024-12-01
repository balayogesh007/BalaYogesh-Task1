import { CreateUserInput } from "./dto/create-user.input";
import { User } from "../../../models/user.entity";
import { GraphQLError } from "graphql";
import jwt from 'jsonwebtoken'

export class UserService{
    constructor(){}

    async createUser(createUserInput: CreateUserInput){
        return User.create({...createUserInput})
    }

    async signIn(emailId: string){
        const verifyUser = await User.findOne({where:{email_id: emailId}});
        if(!verifyUser?.id){
            throw new GraphQLError("User doesn't exist", {
                extensions: {
                    code: "Not Found",
                    http: {status: 404}
                }
            })
        }
        const generateToken = jwt.sign({emailId: verifyUser?.email_id, exp: Math.floor(Date.now() / 1000) + (60 * 60),}, 'rsa')
        return generateToken;
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
