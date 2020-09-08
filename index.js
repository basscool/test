const express = require("express");
const app = express();

app.get('/liste',(req,res)=>{
    res.send([
        {
            id:1,
            nom:"coulibaly"
        },
        {
            id:2,
            nom:"Kone"
        }
    ])
});

app.listen(3000,()=>{
    console.log("gooddddddddddd")
})