var router =require("express").Router();
var notes = require("./notes.js");
var fs = require("fs");

//API GET Request
router.get("/", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
//API POST request
router.post("/", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
//API DELETE request
router.delete("/:id", function(req, res){
    notes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})

module.exports = router;