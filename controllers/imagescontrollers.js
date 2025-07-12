import multer from 'multer'
import {v4 as uuid} from 'uuid'
const storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,'uploads');
    },
    filename(req,file,cb){
        const id=uuid();
        const extname=file.originalname.split('.').pop();
        const fileName=`${id}.${extname}`;
        cb(null,fileName)
    }
})

export const imageupload=multer({storage}).array('files',300);