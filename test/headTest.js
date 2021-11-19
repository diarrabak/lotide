// TEST CODE SCENARIOS
const assertEqual = require('../assertEqual');
const head = require('../head');
//Comparing identical strings

assertEqual(head(["Bootcamp"]), "Bootcamp");

//Comparing string and number

assertEqual(head([1,85,10]), "Bootcamp");
//Comparing non-identical strings

assertEqual(head(["Bootcamp", "Lighthouse Labs"]), "Lighthouse Labs");

//Comparing identical numbers

assertEqual(head([5, 6, 7]), 5);
//Comparing non-identical numbers

assertEqual(head([5, 6, 7]), 6);