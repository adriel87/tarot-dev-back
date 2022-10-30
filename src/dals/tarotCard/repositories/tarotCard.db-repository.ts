import { ObjectId } from 'mongodb';

import { getTarotCardContext } from "../tarotCard.context";
import { TarotCard } from '../tarotCard.model';
import { TarotCardRepository } from "./tarotCard.repository";


export const dbRepository : TarotCardRepository = {
    getTarotCards: async () => await getTarotCardContext().find().toArray(),
    getTarotCard: async ( id: string ) => await getTarotCardContext().findOne({_id: new ObjectId(id)}),
    saveTarotCard: async ( tarotCard : TarotCard ) => await getTarotCardContext().findOneAndUpdate(
        {
            _id: tarotCard._id
        },
        {
            $set: tarotCard
        },
        {
            upsert:true, returnDocument: 'after'
        }),
    deleteTarotCard: async (id:string) => await getTarotCardContext().deleteOne({_id:new ObjectId(id)})
    
}