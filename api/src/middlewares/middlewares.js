import axios from 'axios';
import dotenv from "dotenv"
dotenv.config()

export async function getArticles(search) {
    try {
        // const articles = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);

        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {q: search, lang: 'en', page: '1', page_size: '25'},
            headers: {
                'X-RapidAPI-Key': process.env.NEWS_API_KEY,
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };
        
        const articles = await axios.request(options)
        return articles;

    } catch (error) {
        return error
    }
}

export function categorizeArticles (articles){
    console.log("middleware:", articles.length)
    let categorizedArticles = {}
    let topic = 0;

    // for(let article of articles){
    //     if(!Object.values(categorizedArticles).includes(article.topic)){
    //         categorizedArticles[topic] = article.topic
    //         topic++;
    //     }
    // }
    for(let article of articles){
        if(!Object.keys(categorizedArticles).includes(article.topic)){
            categorizedArticles[article.topic] = []
            categorizedArticles[article.topic].push(article);
        }else{
            categorizedArticles[article.topic].push(article);
        }
    }
    return categorizedArticles;
}