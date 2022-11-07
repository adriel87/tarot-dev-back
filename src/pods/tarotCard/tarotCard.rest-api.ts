import { deleteTemporalImages, upload, uploadToCloudinary } from "common/middlewares";
import { envConstant } from "core/constants";
import { TarotCard } from "dals";
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
        console.log(tarotCards);
        
        res.send(mapTarotCardListFromModelToApi(tarotCards))
    } catch (error) {
        next(error)        
    }
})
.get('/takeFromDeck', async (req, res, next) => {
    try {
        const tarotCardInDeck = await tarotCardRepository.getFromDeck()
        res.send(tarotCardInDeck)
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
    .post('/', upload.single('file'), uploadToCloudinary , deleteTemporalImages ,async (req, res, next) => {
    try {
        const newTarotCard = mapTarotCardFromApiToModel({
            id: req.body?.id,
            isPermanentCard: req.body?.isPermanentCard ?? false,
            createdAt: req.body?.createdAt,
            userEmail: req.body?.userEmail,
            name: req.body?.name,
            love: {
                normal: req.body?.love,
                inverted: req.body?.ilove,
            },
            luck: {
                normal: req.body?.luck,
                inverted: req.body?.iluck,
            },
            deploy: {
                normal: req.body?.deploy,
                inverted: req.body?.ideploy,
            },
            imageURL : req.body?.urlImage
        })

        tarotCardRepository.saveTarotCard(newTarotCard)

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