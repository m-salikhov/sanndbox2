var allPersons = [
    { name: 'Maks', age: 33 },
    { name: 'Lera', age: 32 },
];
console.log(allPersons[1]);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity(allPersons));
var foo = function (x, y) { return console.log(x, y); };
foo(5, 9);
function greet(person) {
    return 'Hello ' + person.name + person.age;
}
console.log(greet({ name: 'Maks', age: 33 }));
