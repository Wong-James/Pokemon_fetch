// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
console.log(example);
let example = "I'm the example!";    

// 1
console.log(hello); // logs undefined
var hello = 'world';

// 2
var needle = 'haystack';
test(); // logs 'magnet'
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // logs 'super cool'

// 4
var food = 'chicken';
console.log(food); //logs 'chicken'
eat(); //logs 'half-chicken'
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 5
mean();
console.log(food); // logs undefined
var mean = function() {
    food = "chicken";
    console.log(food); // logs 'chicken'
    var food = "fish";
    console.log(food); // logs 'fish'
}
console.log(food); // logs 'fish'

// 6
console.log(genre); // logs undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // logs "rock"
    var genre = "r&b";
    console.log(genre); // logs "r&b"
}
console.log(genre); // logs "r&b" 

// 7
dojo = "san jose";
console.log(dojo); // logs "san jose"
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // logs "seattle"
    var dojo = "burbank";
    console.log(dojo); // logs "burbank"
}
console.log(dojo); // logs 'san jose'

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // cannot add/change a const variable
    }
    return dojo; //returns { name: "Chicago", students: 65, hiring = true}
}
