const app = require("express")();
const path = require("path")

const PORT = process.env.PORT || 5000

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
})

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(PORT, function() {
    console.log(`hosting on ${PORT}`)
})