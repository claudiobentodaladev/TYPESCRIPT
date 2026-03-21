//  Interface is a way to define the structure of an object. It allows us to specify the properties and their types that an object should have. This helps to ensure that objects conform to a specific shape and can be used consistently throughout the codebase.

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

function updateWallet(user: User, wallet: UserWallet): void {
  if (wallet.coins && !wallet.credits) {
    user.wallet = {
      coins: wallet.coins + (user.wallet.coins ?? 0),
      credits: user.wallet.credits,
    };
    return;
  }
  if (wallet.credits && !wallet.coins) {
    user.wallet = {
      coins: user.wallet.coins,
      credits: wallet?.credits + (user.wallet.credits ?? 0),
    };
    return;
  } else return;
}

const user = createUser("claudio");

console.log(user);

updateWallet(user, { credits: 10 });

console.log(user);
