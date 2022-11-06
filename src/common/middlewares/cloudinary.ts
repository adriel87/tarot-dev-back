import { v2 as cloudinary } from 'cloudinary';
import { configuration } from '../config/cloudinary'
import { RequestHandler } from 'express';


export const uploadToCloudinary: RequestHandler = async (req, res, next) => {
    
    const { path } = req.file

    cloudinary.config(configuration)
    
    const { url } = await cloudinary.uploader.upload(path)

    if(url){
        req.body.urlImage = url
    }

    next();
  };