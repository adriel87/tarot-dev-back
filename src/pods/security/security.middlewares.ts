import jwt from 'jsonwebtoken'
import { UserSession } from "common-app/models"
import { RequestHandler } from 'express'
import { envConstant } from 'core/constants'






const verifyToken = (token: string, secret: string): Promise<UserSession> => new Promise((resolve ,rejected)=>{
    jwt.verify(token, secret, (error, userSession: UserSession)=>{
        if(error) {
            rejected(error)
        }
        if (userSession) {
            resolve(userSession)
        }else{
            rejected()
        }
    })
})


export const authenticationMiddleware : RequestHandler = async (req, res, next) => {
    try {
        const [, token] = req.headers.authorization?.split(' ') || []
        const userSession = await verifyToken(token, envConstant.SECRET )
        req.userSession = userSession;
        next();
    } catch (error) {
        res.sendStatus(401)
    }
}