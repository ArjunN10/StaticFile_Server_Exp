const express=require("express")
const app=express()
const port=3001


app.get('/product',(req,res)=>{
    res.send("product page")
})

app.get('/product/:catogery',(req,res)=>{
    const {category} =req.params

    switch(category){
        case "laptop":res.send("laptop")
        break;
        case "mobile":res.send("mobile")
        break;
        default : res.send("others")
        break;
    }
})




app.listen(port,()=>{
    console.log(`listen to the port...${port}`);
})

