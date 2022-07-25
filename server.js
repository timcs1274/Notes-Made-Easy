const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();
const notes = require('./Develop/db/db.json');
