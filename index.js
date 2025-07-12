import express from 'express';
import cors from 'cors';
import imagesRoutes from './routes/imagesRoutes.js' 


const PORT=3000;


const app=express();
app.get('/',(req,res)=>{
    res.json({message:"hello world"})
})
app.use(cors());
app.use('/api/single',imagesRoutes)
app.use('/uploads',express.static('uploads'))
app.listen(PORT,()=>{
    console.log('port running in 3000')
})