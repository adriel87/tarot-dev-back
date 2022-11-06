import e, { Router } from 'express'
import jwt from 'jsonwebtoken'

import { UserSession } from 'common-app/models';
import { userRepository } from 'dals/user/repositories';
import { envConstant } from 'core/constants';
import { User } from 'dals';
import { mapUserFromApiToModel } from 'pods/user/user.mappers';
import { compareHash, getBearerToken, hashPassword } from '../../utils/cript';


export const securityApi = Router();

securityApi
.post('/login', async (req, res, next )=> {
    try {
        const { email, password } = req.body;

        const user = await userRepository.getUserByEmail(email)

        // check user is null
        if(user){

            // check if valid password
            if(compareHash(password,user.password)){
               const Bearer =  getBearerToken(user)
               res.send({Bearer})
            }else{
    
                res.sendStatus(401)
           }
        }else{
            res.sendStatus(401)
        }
        
    } catch (error) {
        next(error)
    }
})
.post('/signin',async (req, res, next) =>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('mal formed user')
        }
       
        let token = '';
        let response = {};
        let status = 400;

        // check email exist
        if (await userRepository.checkEmailExist(email)) {
            response['msg'] = 'User already exist';
        //    msg  = 'User already exist'
        }else{
            const userToCreate = mapUserFromApiToModel({
                id:null,
                isAdmin:false,
                name:email,
                password: hashPassword(password)
            })
    
            const user = await userRepository.saveUser(userToCreate);
    
    
            if(user) token = getBearerToken(user as User)
    
            if (token) {
                response['Bearer'] = token
                status = 201
            }
        
        }
        res.status(status).send(response)

    
    } catch (error) {
        res.sendStatus(400)
        next(error)
    }

    
})