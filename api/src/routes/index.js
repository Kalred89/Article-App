import { Router } from 'express';
import axios from 'axios';
import getArticles from '../middlewares/middlewares.js'
import dotenv from "dotenv"
dotenv.config()

const router = Router();

router.get('/home', async (req,res) =>{
    try{
        res.status(200).send("Welcome!")
    }catch(err){
        res.status(400).send(err)
    }
});

router.get('/articles', async (req,res) =>{
    try{
        const articles = await getArticles();
        console.log(articles)
        res.status(200).json(articles.data)
    }catch(err){
        res.status(400).send(err)
    }
});

export default router;