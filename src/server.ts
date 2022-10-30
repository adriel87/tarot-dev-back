import { createRestApiServer, connectToDBServer, db } from './core/servers'
import { envConstant } from './core/constants'

const restApiServer = createRestApiServer()





restApiServer.listen(envConstant.PORT, async ()=>{
    
    
    await connectToDBServer( envConstant.MONGODB_URI );
    
    const cards = await db.collection('cards').findOne();

    console.log(cards);
    

    console.log(`The server is Ready in port ${envConstant.PORT}`);

    
})
