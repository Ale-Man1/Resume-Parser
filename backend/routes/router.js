const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('pdf-parse');

//let dataBuffer = fs.readFileSync('path to PDF file...');

//router.get('/', (req, res) => {

//})
router.get("/", function(req, res){
    console.log("Router Here Contacting Console through the Server")
    res.send("Express Here from Router!")
})

router.post(function(req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }})

module.exports = router