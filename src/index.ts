import express,{Application, Request, Response, NextFunction} from 'express';
import bodyparser from 'body-parser';

const app:Application=express();

app.use(bodyparser.json());

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("Hello! Welcome to tihs vast world...")
});

app.listen(5000,()=>console.log("Server running on port: "+5000));