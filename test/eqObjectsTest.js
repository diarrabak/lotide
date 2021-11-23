const assertEqual = require("../assertEqual");

//FUNCTION IMPLEMENTATION

const course1 = { java: "OOP", c: "Non-OOP" };
const course2 = { java: "Non-OOP", c: "OOP" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, dc), false);
assertEqual(eqObjects(course1, course2), true);
assertEqual(eqObjects(course1, course2), false);
