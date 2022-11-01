import { ObjectId } from 'mongodb'

import * as model from '../../dals'
import * as apiModel from './tarotCard.api-model'


export const mapTarotCardFromModelToApi = (tarotCard : model.TarotCard): apiModel.TarotCard => ({
    id: tarotCard._id.toString(),
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
    _id: new ObjectId(tarotCard.id ?? null),
    name : tarotCard.name,
    image : tarotCard.imageURL,
    deploy : tarotCard.deploy,
    love : tarotCard.love,
    luck : tarotCard.luck
})