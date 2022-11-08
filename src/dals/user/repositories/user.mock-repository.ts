import { ObjectId } from 'mongodb';

import { User } from '../user.model';
import { UserRepository } from "./user.repository";
import { db } from '../../mock-data'


const updateUser = (User : User) => db.user.map(user => user._id === User._id ? User : user).find(user=> user._id === User._id)
const createUser = (User : User) => {
    console.log("saving user");
    User._id = new ObjectId()
    
return  db.user.push(User)
}

export const mockRepository : UserRepository = {
    getUsers : async () => db.user,
    getUser : async ( id : string) => db.user.find(user => {user._id.toString() === id} ),
    saveUser : async ( user : User) => Boolean(user._id) ? updateUser(user) : createUser(user),
    deleteUser :async ( id : string) => db.user.filter(user => user._id.toString() !== id),
    getUserByEmailAndPassword : async ( email : string, password : string) => db.user.find(user => user.email === email && user.password === password) ,
    checkEmailExist:async (email:string) => Boolean(db.user.find(user => user.email === email)),
    getUserByEmail: async (email:string) => db.user.find(user => user.email === email),
    setVote : async (email:string) => Boolean(db.user.find(user => user.email === email)),
    setCardSend : async (email:string) => Boolean(db.user.find(user => user.email === email)),

}