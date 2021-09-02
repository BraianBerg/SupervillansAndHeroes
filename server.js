var superheroes = require('superheroes');
var supervillans = require('supervillains');

var MySuperheroName = superheroes.random();
console.log(MySuperheroName);
var allsupervillans = supervillans.all;
console.log(allsupervillans);
var mysupervillanname = supervillans.random();
console.log('My super villan name is:');
console.log(mysupervillanname);