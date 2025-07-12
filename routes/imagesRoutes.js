import { imageupload} from "../controllers/imagescontrollers.js";
import express from "express";

const router=express.Router()


router.post('/local',imageupload,async(req,res)=>{
    try {
        const files=req.files 
       const imagespaths=files.map((item) =>
        item.path)
       console.log(imagespaths)
    
        res.status(200).json({message:"files uploades succesfully",imagespaths})
        
    } catch (error) {
        res.status(500).json({message:"error found amma here"})
        console.log(error)
    }
});




export default router