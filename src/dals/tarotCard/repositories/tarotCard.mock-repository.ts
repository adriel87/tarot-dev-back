import { ObjectId } from 'mongodb';

import { TarotCard } from '../tarotCard.model';
import { TarotCardRepository } from "./tarotCard.repository";
import { db } from '../../mock-data'


export const mockRepository : TarotCardRepository = {
    getTarotCards:async () => db.tarotCards,
    getTarotCard: async (id : string) => db.tarotCards.find(card => {card._id.toString() === id} ),
    saveTarotCard :async (tarotCard : TarotCard) => Boolean()
    
    
}