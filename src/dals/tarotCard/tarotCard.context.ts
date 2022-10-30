import { db } from '../../core/servers'
import { TarotCard } from './tarotCard.model'


export const getTarotCardContext = () => db?.collection<TarotCard>('cards')
