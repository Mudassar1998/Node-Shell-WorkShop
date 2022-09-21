module.exports = function () {
  const { cwd } = require('node:process');

console.log(`Current Directory : ${cwd()}`);
};