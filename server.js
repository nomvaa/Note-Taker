const app = require("express")();
const path = require("path")

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
})

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, function() {
    console.log("hosting on 3000")
})