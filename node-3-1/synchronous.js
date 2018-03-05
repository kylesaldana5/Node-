//  require in file system module 
const {readFileSync} = require('fs');

//  set up parameters for a user to put in a file 
const fileArg = process.argv[2];

// check to see if there is a file?
if (fileArg) {
    try{
        const data = readFileSync(fileArg);
        process.stdout.write(data.toString());
    }catch (err){
        console.log('error', err );
    }
} else {
    console.log('please pass in a file to read');
    process.exit();
    
}

console.log('cause this is the synchronous version ');