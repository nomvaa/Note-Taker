const express = require("express");
const path = require("path")
const apiRoutes = require("./public/assets/js/apiRoute")
const htmlRoutes = require("./public/assets/js/htmlRoute")

const app = express();
const PORT = process.env.PORT || 5000


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function() {
    console.log(`hosting on ${PORT}`)
})