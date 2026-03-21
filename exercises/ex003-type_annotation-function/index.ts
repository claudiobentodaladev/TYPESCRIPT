//  Type annotacions is used to explicitly declare the type of a variable, function parameter, or return value. It helps to catch type-related errors during development and improves code readability.

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(3, 2));

const greet = (name: string, age?: number): void => {
  console.log(`Hi, ${name}`);

  if (age) console.log(`you are ${age} years old`);
};

greet("claudio", 16);
greet("Dala");
