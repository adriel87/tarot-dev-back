import { envConstant } from './core/constants'
import { createRestApiServer, connectToDBServer, db } from './core/servers'
import { tarotCardApi } from './pods/tarotCard'


const restApiServer = createRestApiServer()

// TODO agregar carpeta publica


restApiServer.use('api/tarotCard', tarotCardApi)


// levantar el servicio
restApiServer.listen(envConstant.PORT, async ()=>{
    
    if (envConstant.isApiMock) {
        console.log('RUNING MOCK MODE');
    }else{
        await connectToDBServer( envConstant.MONGODB_URI );
        const cards = await db.collection('cards').findOne();
        console.log('CONECTED TO DATABASE');
    }
    console.log(`The server is Ready in port ${envConstant.PORT}`);
})
