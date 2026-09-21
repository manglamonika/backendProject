import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
//cors give origin permission , Agar tumhara React frontend:
http://localhost:5173
// par chal raha hai, to tum specifically us origin ko allow kar sakti ho:

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
  })
);
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export{app}




//without middleware use  suppose 1)client url hit krega instagram -->next process -(req,res)handle krke req vapis res bhj dia res.send("hitesh")
//middleware use                    ""                             check if user logged in   (err,req,res,next)      ""(next is like flag)aage pass kr dete h flag