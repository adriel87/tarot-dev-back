import { ObjectId } from 'mongodb'

export interface TarotCard {
    _id: ObjectId,
    name: string,
    luck: Descriptions,
    love : Descriptions,
    deploy : Descriptions,
    image : string,
    createdAt: Date,
    userEmail: string,

}

interface Descriptions{
    normal: string,
    inverted : string,
}