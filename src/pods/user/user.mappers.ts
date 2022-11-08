import { ObjectId } from 'mongodb'
// import { hashPassword } from 'utils'

import * as model from '../../dals'
import * as apiModel from './user.api-model'


export const mapUserFromModelToApi = (user: model.User) : apiModel.User => ({
    id: user._id.toString(),
    name: user.email,
    isAdmin: user.isAdmin,
    // password: 'user.password',
    isTarotCardSend: user.isTarotCardSend,
    isVoted: user.isVoted
})

export const mapUserListFromModelToApi = (userList : model.User[]) : apiModel.User[] =>
    userList.map(mapUserFromModelToApi)


export const mapUserFromApiToModel = (user: apiModel.User ) : model.User => ({
    _id: user.id ? new ObjectId( user.id ) : new ObjectId(),
    isAdmin: user.isAdmin,
    email: user.name,
    password: user.password ,
    isTarotCardSend : user.isTarotCardSend,
    isVoted : user.isVoted
})



