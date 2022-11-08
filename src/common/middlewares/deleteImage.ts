import path from 'path'
import { unlink } from 'node:fs/promises'
import { RequestHandler } from 'express';


export const deleteTemporalImages: RequestHandler = async (req, res, next) => {
    
    console.log(req.file)
    try {
        await unlink(`${req.file.path}`)
    } catch (error) {
        console.log(error);
        
    }
    
    next();
  };