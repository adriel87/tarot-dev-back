import { envConstant } from './core/constants'
import { createRestApiServer, connectToDBServer, db } from './core/servers'
import { tarotCardApi } from './pods/tarotCard'
import { logErrorRequestMiddleware,logRequestMiddleware } from './common/middlewares'
import { authenticationMiddleware, securityApi } from 'pods/security'
import { userApi } from 'pods/user'

const restApiServer = createRestApiServer()

// TODO agregar carpeta publica


restApiServer.use(logRequestMiddleware)

restApiServer.use('/api/security', securityApi)


restApiServer.use('/api/user', userApi)

restApiServer.use('/api/tarotCard', authenticationMiddleware , tarotCardApi)


restApiServer.use(logErrorRequestMiddleware)

// levantar el servicio
restApiServer.listen(envConstant.PORT, async ()=>{
    console.log(envConstant);
    
    if (envConstant.isApiMock === 'true') {
        console.log('RUNING MOCK MODE');
    }else{
        await connectToDBServer( envConstant.MONGODB_URI );
        const cards = await db.collection('cards').findOne();
    }
    console.log(`The server is Ready in port ${envConstant.PORT}`);
})
