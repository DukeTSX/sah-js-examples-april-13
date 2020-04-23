let name = 'Dani';

console.log(name + "'s apples")
console.log('Hello World!')

// $('selector').action()
$('h1').text('We are having a 10 minute break until 17:05');
$('p').html('StayAtHome Coding Camp, Likes: <strong>13</strong>');

$('strong').css('background', 'red');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass(color);
$('h2').toggleClass(color);

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>');

$('#special-list-item').remove();


let addButtonHandler = () => {
    if ($('li').length < 5 ) {
    $('ul').append('<li>My name is ' + name + '</li>');
    }
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
});

let age = 31;

console.log('Starting the if')

if (age < 18) {
    console.log('Not old enough to drink');
} else {
    console.log('Old enough to drink');
}

console.log('This is after the if')



// This is a Javascript single line comment

/*
This is a multiline
Javascript comment
*/

/*
12+3
15
12-5
7
12*4
48
12/3
4
12/4*8-15
9
let age
undefined
age = 33
33
age/3
11
age = 12
12
age / 3
4
let legs = 4
undefined
legs * 2
8
legs = 2;
2
let name = Adam
VM534:1 Uncaught ReferenceError: Adam is not defined
    at <anonymous>:1:12
(anonymous) @ VM534:1
lat anotherAge = age
VM634:1 Uncaught SyntaxError: Unexpected identifier
let anotherAge = age
undefined
let name = 'Adam'
undefined
name = 'Peti'
"Peti"
name = "Dani"
"Dani"
"Adam's apples"
"Adam's apples"
let name = 'something'
undefined
true
true
false
false
let oldEnoughToDrive = false
undefined
oldEnoughToDrive = true
true
name + 'else'
"somethingelse"
name + 'else'
"somethingelse"
name + 'else' + name + age
"somethingelsesomething12"
'adam' - 'apple'
NaN
name - age
NaN
true && true
true
true || false
true
true && (false || (true && false))
false
!true
false
!false
true
oldEnoughToDrive
true
!oldEnoughToDrive
false
let color1 = 'orange'
undefined
let color2 = 'blue'
undefined
let colors = ['orange', 'blue', 'green', 'purple']
undefined
colors[3]
"purple"
colors[2]
"green"
colors.push('yellow')
5
colors
(5) ["orange", "blue", "green", "purple", "yellow"]
[12, 54, 1212]
(3) [12, 54, 1212]
[true, false, true]
(3) [true, false, true]
[colors, colors, colors]
(3) [Array(5), Array(5), Array(5)]
[12, 'hello', true]
(3) [12, "hello", true]
colors
(5) ["orange", "blue", "green", "purple", "yellow"]
color[2] = 'lime'
VM2249:1 Uncaught ReferenceError: color is not defined
    at <anonymous>:1:1
(anonymous) @ VM2249:1
colors[2] = 'lime'
"lime"
colors
(5) ["orange", "blue", "lime", "purple", "yellow"]
[12, 'hello', true] = 0
VM2334:1 Uncaught SyntaxError: Invalid destructuring assignment target
[31, 'Dani' true]
VM2366:1 Uncaught SyntaxError: Unexpected token 'true'
[31, 'Dani1, true]
VM2385:1 Uncaught SyntaxError: Invalid or unexpected token
[31, 'Dani', true]
(3) [31, "Dani", true]
let person = {}
undefined
let person = {
name: 'Dani',
age: 33,
oldEnoughToDrive: true
}
undefined
person
{name: "Dani", age: 33, oldEnoughToDrive: true}
person.name
"Dani"
person.age
33
person.age + 10
43
person.name = 'Adam'
"Adam"
person
{name: "Adam", age: 33, oldEnoughToDrive: true}
person.age = 31
31
person.name = 'Dani'
"Dani"
person.favouriteColors = ['lime', 'green']
(2) ["lime", "green"]
person
{name: "Dani", age: 31, oldEnoughToDrive: true, favouriteColors: Array(2)}
*/