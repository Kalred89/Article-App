import { Router } from 'express';
import axios from 'axios';
import { getArticles, categorizeArticles } from '../middlewares/middlewares.js'
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

router.get('/articles/search', async (req,res) =>{
    const {q} = req.query
    try{
        const articles = await getArticles(q);
        // console.log(articles.data)
        const categorizedArticles = categorizeArticles(articles.data.articles)
        console.log(categorizedArticles)
        // res.status(200).json(articles.data.articles.length)
        // res.status(200).json(articles.data)
        // res.status(200).json(categorizedArticles)
        res.status(200).json(articles.data)
    }catch(err){
        res.status(400).send(err)
    }
});

export default router;