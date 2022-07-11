import axios from 'axios';
import dotenv from "dotenv"
dotenv.config()

export default async function getArticles() {
    try {
        const articles = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`);

        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=d8cfb966ad564b89b2dece74afb2dccc

        
        // console.log(articles)
        return articles;

    } catch (error) {
        return error
    }
}
