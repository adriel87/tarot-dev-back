import { ObjectId } from 'mongodb';

import { getUserContext } from "../user.context";
import { User } from '../user.model';
import { UserRepository } from "./user.repository";


// falta encriptar la informacion en general
export const dbRepository : UserRepository = {
    getUsers: async () => await getUserContext().find().toArray(),
    getUser: async ( id: string ) => await getUserContext().findOne({_id: new ObjectId(id)}),
    saveUser: async ( User : User ) => await getUserContext().findOneAndUpdate(
        {
            _id: User._id
        },
        {
            $set: User
        },
        {
            upsert:true, returnDocument: 'after'
        }),
    deleteUser: async (id:string) => await getUserContext().deleteOne({_id:new ObjectId(id)}),
    getUserByEmailAndPassword : async (email : string, password : string) => {
        // falta encriptar antes de mandar

      return  await getUserContext().findOne({
            email,
            password
        })
    },
    checkEmailExist:async (email:string) => {
        const exist = await getUserContext().findOne({
            email
        })

        return exist ? true : false;
},
    getUserByEmail:async (email:string) => await getUserContext().findOne({email}),
    setVote:async (id : string) => {
       const update =  await getUserContext().updateOne({_id: new ObjectId(id)}, {isVoted:true} )    
       return update.acknowledged;
    },
    setCardSend:async (id : string) => {
        const update =  await getUserContext().updateOne({_id: new ObjectId(id)}, {$set:{isTarotCardSend:true}} )    
        return update.acknowledged;
     }
    
}