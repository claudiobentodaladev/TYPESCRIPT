//  Reuse an interface structure

interface User {
  username: string;
  createdAt: Date;
}

interface Admin extends User {
  ban(user: User): void;
}
