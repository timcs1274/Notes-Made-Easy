const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();
const notes = require('./Develop/db/db.json');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//adding middleware



//function to create note
function createNote(body, noteArr) {
    const newNote = body;
    
    if (!Array.isArray(noteArr))
    noteArr = [];

    if(noteArr.length === 0)
    noteArr.push(0);

    body.id = noteArr[0];
    noteArr[0]++;

    return createNote;
}



//function to delete note



//add server function