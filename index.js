const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;


const viewsPath = (path.join(__dirname , "/Templates/views"))
const partialsPath = (path.join(__dirname, "/Templates/Partials"))

console.log(viewsPath)
console.log(partialsPath)

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname,"/Templates/zonato")));

app.get("",(req, res)=>{
    res.render("index")
})
app.get('/about', (req, res)=>{
    res.render("about")
})
app.get("*", (req, res)=>{
    res.send("404 Error Through Us")
})

app.listen(port , ()=>{
    console.log("It is Going well...")
})