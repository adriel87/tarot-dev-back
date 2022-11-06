import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserSession } from 'common-app/models'
import { envConstant } from 'core/constants'
import { User } from 'dals'


export const hashPassword = (password: string): string =>  bcrypt.hashSync(password, Number(envConstant.SALT_ROUNDS))


export const compareHash = (password : string, hash: string): boolean =>  bcrypt.compareSync(password, hash)


export const getBearerToken = (user : User):string => {
        const userSession : UserSession = {id: user._id?.toHexString()}
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
        return token;

}