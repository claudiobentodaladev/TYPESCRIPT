//  Interface

interface UserWallet {
  coins?: number;
  credits?: number;
}

interface User {
  username: string;
  createdAt: Date;
  wallet: UserWallet;
}

function createUser(username: string): User {
  return {
    username: username,
    createdAt: new Date(),
    wallet: {
      coins: 0,
      credits: 5,
    },
  };
}

function updateWallet(user: User, wallet?: UserWallet): void {
  user.wallet = {
    coins: wallet?.coins || user.wallet.coins,
    credits: wallet?.credits || user.wallet.credits
  };
}

const user = createUser("claudio");

console.log(user);

updateWallet(user,{coins: 10});

console.log(user);
