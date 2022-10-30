import { envConstant } from './core/constants'
import { createRestApiServer, connectToDBServer, db } from './core/servers'
import { tarotCardApi } from './pods/tarotCard'
import { logErrorRequestMiddleware,logRequestMiddleware } from './common/middlewares'

const restApiServer = createRestApiServer()

// TODO agregar carpeta publica


restApiServer.use(logRequestMiddleware)

restApiServer.use('/api/tarotCard', tarotCardApi)




restApiServer.use(logErrorRequestMiddleware)

restApiServer.get('api/', (req, res)=>{
    console.log("lkajsdlkfja;sdkjflkj");
    
    res.send('hola munda')
})
// levantar el servicio
restApiServer.listen(envConstant.PORT, async ()=>{
    console.log(envConstant);
    
    if (envConstant.isApiMock) {
        console.log('RUNING MOCK MODE');
    }else{
        await connectToDBServer( envConstant.MONGODB_URI );
        const cards = await db.collection('cards').findOne();
        console.log(cards);
    }
    console.log(`The server is Ready in port ${envConstant.PORT}`);
})
