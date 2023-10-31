const express=require("express")
const app=express()
const path=require("path")
const port=3000


app.use(express.static('public'))



// app.get('/',(req,res)=>{
//     res.send("product page")
// })

// app.get('/:userId',(req,res)=>{
//     res.send(req.params)
// })

//home

// app.get('/',(req,res)=>{
// res.send("Home page")
// })

//product

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

//about

// app.get("/about",(req,res)=>{
//     res.send("about page");
// })

//contact

// app.get("/contact",(req,res)=>{
//     res.send("contact page")
// })



app.listen(port,()=>{
    console.log(`listen to the port...${port}`);
})

