//  Type annotacions is used to explicitly declare the type of a variable, function parameter, or return value. It helps to catch type-related errors during development and improves code readability.

const myName: string = "claudio";
const myAge: number = 16;
const isAdult: boolean = myAge >= 18;

console.log(`Hi, i'm ${myName} and i'm ${myAge} years old`);

if (isAdult) console.log(`I'm adult`);
else console.log(`I'm not adult`);