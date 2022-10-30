import { createRestApiServer } from './core/servers'
import { envConstant } from './core/constants'

const restApiServer = createRestApiServer()





restApiServer.listen(envConstant.PORT, ()=>{
    console.log(envConstant);

    
})
