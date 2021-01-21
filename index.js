const express=require('express')
const cors=require('cors')
const path = require('path');
// lolly
// small


const app=express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

const PORT=5000|| process.env.PORT

app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(PORT,()=>{
    console.log("Server up on PORT ",PORT)
})