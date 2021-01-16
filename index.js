const {normal,thumbnail} =require('./image_urls')
const express=require('express')
const fs=require('fs')
const cors=require('cors')

// lolly
// small
const pokemon_data=JSON.parse(fs.readFileSync("pokedex.json"))
const types_data=JSON.parse(fs.readFileSync("types.json"))

const app=express()

app.use(cors())

const PORT=5000|| process.env.PORT

app.get("/types",(req,res)=>{
    res.status(200).json(types_data)
})

app.get("/pokemon",(req,res)=>{
    
    res.status(200).json(pokemon_data)
})

app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(PORT,()=>{
    console.log("Server up on PORT ",PORT)
})