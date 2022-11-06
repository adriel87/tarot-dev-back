import { ObjectId } from 'mongodb'

import * as model from '../../dals'
import * as apiModel from './tarotCard.api-model'


export const mapTarotCardFromModelToApi = (tarotCard : model.TarotCard): apiModel.TarotCard => ({
    id: tarotCard._id.toString(),
    createdAt: tarotCard.createdAt.toString() ?? null,
    userEmail: tarotCard.userEmail ?? null,
    deploy: tarotCard.deploy,
    luck: tarotCard.luck,
    love: tarotCard.love,
    name: tarotCard.name,
    imageURL: tarotCard.image
})

export const mapTarotCardListFromModelToApi = (
    tarotCardList: model.TarotCard[]
): apiModel.TarotCard[] => tarotCardList.map(mapTarotCardFromModelToApi)

export const mapTarotCardFromApiToModel = (tarotCard : apiModel.TarotCard) : model.TarotCard => ({
    _id: tarotCard.id ? new ObjectId(tarotCard.id) : new ObjectId(),
    createdAt: new Date(tarotCard.createdAt),
    userEmail: tarotCard.userEmail,
    name : tarotCard.name,
    image : tarotCard.imageURL,
    deploy : tarotCard.deploy,
    love : tarotCard.love,
    luck : tarotCard.luck
    
})