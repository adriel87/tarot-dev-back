import { envConstant } from '../../../core/constants'


// TODO actualizar el card repos
export const tarotCardRepository = envConstant.isApiMock 
    ? 'holi'
    : 'manoli'