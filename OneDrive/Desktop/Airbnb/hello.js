// let name ='Ernest';
// let age = 30;


// let person = {
//    name: 'Ernest',
//    age: 30 
// };
// console.log(person);

//Dot Notation
// person.name = 'Ernest';

// console.log(person.name);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 7;
console.log(selectedColors.length );
// console.log(selectedColors[0]);

//performing a task
function greet(name, lastName) {
    // console.log('Hello World');
    console.log('Hello ' + name + '   '+ lastName);
}
greet('Ernest', 'Muigai');

//calculating a value
function square(num) {
    return num * num;
}
console.log(square(2));