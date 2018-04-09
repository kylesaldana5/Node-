const { createWriteStream } = require('fs');
const { generateProgram } = require('./faker');

// Create program JSON
let program = generateProgram();
let programStream = createWriteStream('./data/programs.json');
programStream.write(JSON.stringify(program));