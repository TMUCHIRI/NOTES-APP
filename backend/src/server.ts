import express, { NextFunction, Request, Response, json } from 'express'

import note_router from './routers/notes.router'

const app = express()

app.use(json())
app.use('/notes', note_router)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})

let PORT = 5100

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})