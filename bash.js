process.stdout.write('prompt > ');
const ls = require('./ls');
const pwd = require('./pwd');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
if(cmd=="pwd") {
  return pwd();
}
if(cmd=="ls") {
  return ls();
  
}
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
// const { cwd } = require('node:process');

// console.log(`asdasdsadasdsadsaddadasdad : ${cwd()}`);
// pwd();