import { envConstant } from '../../../core/constants'
import { dbRepository } from './tarotCard.db-repository'
import { mockRepository } from './tarotCard.mock-repository'


// TODO actualizar el card repos
export const tarotCardRepository = envConstant.isApiMock 
    ? mockRepository
    : dbRepository