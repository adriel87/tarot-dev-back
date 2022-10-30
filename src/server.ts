import { createRestApiServer } from './core/servers'

const restApiServer = createRestApiServer()





restApiServer.listen(8080, ()=>{
    console.log("server listen in 8080");
    
})
