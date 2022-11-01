import { envConstant } from "core/constants";
import { Router } from "express";
import jwt from 'jsonwebtoken'
import { tarotCardRepository } from '../../dals/tarotCard/repositories'
import {
    mapTarotCardFromApiToModel,
    mapTarotCardFromModelToApi,
    mapTarotCardListFromModelToApi
} from './tarotCard.mappers'

export const tarotCardApi = Router()


tarotCardApi
// all tarot Cards
.get('/',async (req, res, next) => {
    try {
        const tarotCards = await tarotCardRepository.getTarotCards();
        res.send(mapTarotCardListFromModelToApi(tarotCards))
    } catch (error) {
        next(error)        
    }
})
// tarot card by id
    .get('/:id', async (req, res, next)=>{

    try {
        const id = req.params.id;
        const tarotCard = await tarotCardRepository.getTarotCard(id);
        if (tarotCard === null || tarotCard === undefined) {
            throw new Error('no existe este id')
        }
        res.send("mapTarotCardFromApiToModel(tarotCard)")
    } catch (error) {
        next(error)    
    }
})
// create or update tarot card
    .post('/', async (req, res, next) => {
    try {
        const tarotCard = mapTarotCardFromApiToModel(req.body.tarotCard);
        const newTarotCard = await tarotCardRepository.saveTarotCard(tarotCard)
        res.send(newTarotCard)
    } catch (error) {
        next(error)        
    }
})
// delete tarotCard
.delete('/:id', async (req, res, next)=> {
    try {
        const id = req.params.id
        const deleteCard = await tarotCardRepository.deleteTarotCard(id)
        res.send(deleteCard)
    } catch (error) {
        next(error)
    }
})