import { User } from "../";
import { ModifyResult, DeleteResult } from 'mongodb'

export interface UserRepository {
    getUsers: ()=> Promise<User[]>;
    getUser: ( id :string ) => Promise<User>;
    getUserByEmail : (email: string) => Promise<User>;
    saveUser: ( user: User) => Promise<number | User> | Promise<ModifyResult<User>>;
    deleteUser: ( id: string ) => Promise<DeleteResult> | Promise<User[]>;
    getUserByEmailAndPassword : (email :string , password: string) => Promise<User> | null;
    checkEmailExist: (email: string) => Promise<boolean> ;
}