// Interface for global fuctions

declare global {
  interface Console {
    sayHello(): void;
  }
}

Object.assign(console, {
  sayHello() {
    console.log("hello");
  },
});

console.sayHello();
