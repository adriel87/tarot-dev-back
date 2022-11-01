import { Router } from "express";
import { userRepository } from '../../dals/user/repositories'
import {
    mapUserFromApiToModel,
    mapUserFromModelToApi,
    mapUserListFromModelToApi
} from './user.mappers'

export const userApi = Router()


userApi
// all tarot Cards
    .get('/',async (req, res, next) => {

    try {
        const users = await userRepository.getUsers();
        res.send(mapUserListFromModelToApi(users))
    } catch (error) {
        next(error)        
    }
})
// tarot card by id
    .get('/:id', async (req, res, next)=>{

    try {
        const id = req.params.id;
        const user = await userRepository.getUser(id);
        if (user === null || user === undefined) {
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
        
        const user = mapUserFromApiToModel(req.body.user);
        const newUser = await userRepository.saveUser(user)
        console.log(newUser);
        res.send({newUser})
    } catch (error) {
        next(error)        
    }
})
// delete tarotCard
.delete('/:id', async (req, res, next)=> {
    try {
        const id = req.params.id
        const deleteUser = await userRepository.deleteUser(id)
        res.send(deleteUser)
    } catch (error) {
        next(error)
    }
})