//  Type annotacions

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(3, 2));

const greet = (name: string, age?: number): void => {
  console.log(`Hi, ${name}`);

  if (age) console.log(`are you ${age} years old`);
};

greet("claudio", 16);
greet("Dala");
