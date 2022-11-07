import { ObjectId } from 'mongodb';

import { TarotCard } from '../tarotCard.model';
import { TarotCardRepository } from "./tarotCard.repository";
import { db } from '../../mock-data'


const updateCard = (tarotCard : TarotCard) => db.tarotCards.map(card => card._id === tarotCard._id ? tarotCard : card)
const createCard = (tarotCard : TarotCard) => db.tarotCards.push(tarotCard)

export const mockRepository : TarotCardRepository = {
    getTarotCards : async () => db.tarotCards,
    getTarotCard : async (id : string) => db.tarotCards.find(card => {card._id.toString() === id} ),
    saveTarotCard : async (tarotCard : TarotCard) => Boolean(tarotCard._id) ? updateCard(tarotCard) : createCard(tarotCard),
    deleteTarotCard :async (id : string) => db.tarotCards.filter(card => card._id.toString() !== id),
    getFromDeck:async () => db.tarotCards.filter(card => card.isPermanentCard === true)
    
}