const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.json({status: 'ok'})
})


app.listen(5500, ()=>{
    console.log("Server running on port 5500");
})