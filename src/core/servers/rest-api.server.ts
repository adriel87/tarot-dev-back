import express from 'express';
import path from 'path';
import cors from 'cors';


export const createRestApiServer = () => {
    const restApiServer = express();
    restApiServer.use(express.json());
    // please configure cors whit your necesary configuration
    restApiServer.use(cors());

    // your public directory
    restApiServer.use(express.static( path.join(__dirname, 'public') ))

    return restApiServer;
}


