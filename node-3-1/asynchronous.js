//  require in file system module 

const {
    createReadStream, 
    createWriteStream,
    appendFile,
    writeFile,
} = require('fs');

//  set up parameters for a user to put in a file 
const fileArg = process.argv[2];

// tranfrom and writeable are like shells 
const {Transform, Writable} = require('stream');

// creates a new instantiated  object 
const upperCaseify = Transform();
const writeStream = Writable();


// redefine a method that is already there but is empty 
upperCaseify._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase() );
}

//  next is the same thing as a call back / always us to stack / chain or streams ontop of each other 
writeStream._write = (buffer, _, next) => {
    writeFile("messageUppercase.txt", buffer, (err) => {
        if(err) throw err;
        console.log('the data to write was added to the file!' );

     });
    next();
};

createReadStream(fileArg)
.pipe(upperCaseify)
.pipe(writeStream);