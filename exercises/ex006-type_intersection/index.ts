// Type intersections

interface MyFetchOptions {
  printInput?: boolean;
  printTime?: boolean;
  response?: boolean;
}

type RequestOptions = MyFetchOptions & RequestInit;

const myFetch = (input: string, options?: RequestOptions) => {
  if (options?.printInput) console.log("Input: ", input);

  if (options?.printTime) console.log("Time: ", new Date().toDateString());

  if (options?.response) {
    fetch(input, options)
      .then((response) => response.json())
      .then((Data) => console.log("Response: ", Data));
  }

  return fetch(input, options);
};

myFetch("http://localhost:5000/api", {
  method: "GET",
  printInput: true,
  printTime: true,
  response: true,
});
