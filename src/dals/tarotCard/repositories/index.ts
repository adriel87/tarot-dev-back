import { envConstant } from '../../../core/constants'
import { dbRepository } from './tarotCard.db-repository'
import { mockRepository } from './tarotCard.mock-repository'


export const tarotCardRepository = envConstant.isApiMock === 'true'
    ? mockRepository
    : dbRepository