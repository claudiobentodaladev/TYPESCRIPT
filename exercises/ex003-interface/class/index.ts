// Interface

interface Response {
  success: boolean;
  message: string;
  data: object;
}

class ApiResponse {
  #message: string;
  constructor(message: string) {
    this.#message = message;
  }

  ok(data?: object): Response {
    return {
      success: true,
      message: this.#message,
      data: data || {},
    };
  }

  error(data?: object): Response {
    return {
      success: false,
      message: this.#message,
      data: data || {},
    };
  }
}

const res = new ApiResponse("created the user").ok();

console.log(res);
