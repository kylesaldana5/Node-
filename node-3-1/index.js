// shabang 

"#!/usr/bin/env node"


// Not lets search for words in our machines dictionary
const userInput = process.argv[2] ? process.argv[2].toLowerCase() : null;
const { createReadStream } = require('fs');
const { Writable } = require('stream');
const { map, split } = require('event-stream');
const limitToTen  = require('./transforms/limit_to_ten')
// import our transform stream;

const writeStream = Writeable();
const wordListStream = createReadStream("/Users/kyles/Downloads/dictionary")

writeStream._write = (word, _, next) =>{
    if(word.toString()=== "limit reached"){
    console.log('limit reached' );
    process.exit()
    }
    process.stdout.write(word);
}

if (!userInput) {
    console.log('Usage: readfile [search term]');
    process.exit();    
}

wordListStream
.pipe(split())
.pipe(map( (word, next) =>{
    word.toString().toLowerCase().includes(userInput) ? next(null, word + "\n") 
    : next()
}))
.pipe(limitToTen())
.pipe(writeStream);