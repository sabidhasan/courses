//REQUIRES NODE MODULE faker

const fake = require('faker');

console.log('===================');
console.log('WELCOME TO MY SHOP!');
console.log('===================');
for (var i = 0; i < 10; i++) {
  console.log(`${fake.commerce.product()} - $${fake.commerce.price()}`)
}
