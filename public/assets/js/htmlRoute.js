var router =require("express").Router();
var path =require("path");

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../..", "notes.html"))
})
router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../..", "index.html"))
})

module.exports = router