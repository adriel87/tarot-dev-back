import { ObjectId } from 'mongodb'

export interface User {
    _id: ObjectId,
    email: string,
    password: string,
    isAdmin: boolean,
    isVoted: boolean,
    isTarotCardSend: boolean,

}

