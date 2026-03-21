// Types is used to define custom types.

type input = string | number;

function print(value: input): void {
  console.log(`${value} is ${typeof value}`);
}

print("hello");
print(13);
