//express setup
import Express from "express";
const app = Express();
const port = process.env.PORT || '3001'

//Database connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import connectDB from './db/connnectdb.js'
connectDB(DATABASE_URL);

//for posting data to retrive 
app.use(Express.urlencoded({extended:false}))

//Static files
import {join} from 'path'
app.use("/student",Express.static(join(process.cwd(),"public")));
app.use("/student/upload",Express.static(join(process.cwd(),"public")));
app.use("/student/edit",Express.static(join(process.cwd(),"public")));

//set templete engine
app.set("view engine", "ejs")

//Routes
import web from './routes/web.js'
app.use("/student", web)
app.listen(port, ()=>{
    console.log(`Server is listening at port: http://localhost:${port}`)
})