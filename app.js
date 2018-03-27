console.log('starting app.js');
const fs = require('fs');
// const os = require('os');

const notes = require('./notes.js');

// const _ = require('lodash');

const yargs = require('yargs');

// console.log(_.isString(true));
// var user = os.userInfo('utf8');

// fs.appendFile('greetings.txt',`Hello ${user.username}, you're ${notes.age}`,(error) =>
// {
//   if (error) throw console.error();
//   console.log('The data was appended to the file');
// }
// );

// var result = notes.addNumbers(2,3);
// console.log('the result is ' + result);

// var arr = _.uniq([2,2,'Daso',2]);
// console.log(arr);
//
// var cmdArg = process.argv[2];
// console.log("hi "+ cmdArg);

const argv = yargs.argv;
const command = argv._[0];
console.log("yargs ~ ",argv);
// console.log("process.argv ~ ",process.argv);

if(command === 'add'){
notes.addNote(argv.title,argv.body);
}else if(command === 'getAll'){
notes.getAll();
}else if (command === 'remove') {
notes.removeNote(argv.title);
}else if (command === 'get'){
console.log('note returned : ',(notes.getNote(argv.title)).body);
}else {
console.log('invalid command');
}
