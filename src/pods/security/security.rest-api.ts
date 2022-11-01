import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { UserSession } from 'common-app/models';
import { userRepository } from 'dals/user/repositories';
import { envConstant } from 'core/constants';


export const securityApi = Router();

securityApi
.post('/login', async (req, res, next )=> {
    try {
        const { email, password } = req.body;

        const user = await userRepository.getUserByEmailAndPassword(email, password)
        
        if(user){
            // TODO create token 
            const userSession : UserSession = {id: user._id.toHexString()}
            const secret = envConstant.SECRET
            const token = jwt.sign(
                {
                    userSession, isAdmin: user.isAdmin
                }, 
                    secret, 
                {
                    expiresIn: '1d',
                    algorithm: 'HS256'
                })
            // TODO send token
            res.send(`Bearer ${token}`)

        }else{
            res.sendStatus(401)
        }

        
    } catch (error) {
        next(error)
    }

})