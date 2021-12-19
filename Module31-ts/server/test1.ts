type Person = { name: string; age: number };

const allPersons: Person[] = [
  { name: 'Maks', age: 33 },
  { name: 'Lera', age: 32 },
];
console.log(allPersons[1]);

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity(allPersons));

const foo = (x: number, y: number) => console.log(x, y);
foo(5, 9);
function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name + person.age;
}
console.log(greet({ name: 'Maks', age: 33 }));
