import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, './public/temp/images')
    },
    filename(req, file, callback) {
        let filetype = '';

        if (file.mimetype === 'image/gif') {
            filetype = 'gif'
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png'
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpeg'
        }
        
        console.log(file);


        callback(null,`${file.originalname}-${Date.now()}.${filetype}`)
    },
})

export const upload = multer({storage})
