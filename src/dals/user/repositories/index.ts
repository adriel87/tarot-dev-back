import { envConstant } from '../../../core/constants'
import { dbRepository } from './user.db-repository'
import { mockRepository } from './user.mock-repository'


export const userRepository = envConstant.isApiMock === 'true'
    ? mockRepository
    : dbRepository