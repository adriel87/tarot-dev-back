import { TarotCard } from "../tarotCard.model";
import { ModifyResult, WithId, DeleteResult } from 'mongodb'

export interface TarotCardRepository {
    getTarotCards: ()=> Promise<TarotCard[]>;
    getTarotCard: ( id :string ) => Promise<WithId<TarotCard> | null> | Promise<TarotCard | undefined>;
    saveTarotCard: (tarotCard:TarotCard) => Promise<ModifyResult<TarotCard>> | Promise<number | TarotCard[]>;
    deleteTarotCard: (id: string) => Promise<DeleteResult> | Promise<TarotCard[]>;
}