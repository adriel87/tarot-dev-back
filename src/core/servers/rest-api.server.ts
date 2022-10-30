import express from 'express';
import cors from 'cors';


export const createRestApiServer = () => {
    const restApiServer = express();
    restApiServer.use(express.json());
    // please configure cors whit your necesary configuration
    restApiServer.use(cors());

    return restApiServer;
}


