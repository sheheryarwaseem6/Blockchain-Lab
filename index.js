const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const data = "./data.json"
const fs = require('fs');
const PORT = 3001;


app.use(bodyParser.json())

app.get("/read-file", (req,res)=>{
    file = JSON.parse(fs.readFileSync(data , "utf-8"))
    res.json(file)
})
app.get("/find-data/:name", (req, res)=>{
    let file = JSON.parse(fs.readFileSync(data, "utf8"))
    const name = req.params.name
    foundData = file.find(user =>{
        return user.name == name

    })
    console.log(typeof foundData);
    res.json(typeof foundData !== "undefined" ? foundData : "user not found")
})




app.listen(PORT, () => {
    console.log("Server is running at port: " + PORT);
})