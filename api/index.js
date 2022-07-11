import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import router from "./src/routes/index.js"


const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors())
app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})

