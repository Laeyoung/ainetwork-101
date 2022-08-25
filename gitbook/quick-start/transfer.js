const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Create 1 new account
const accounts = ain.wallet.create(1);
const myAddress = accounts[0];

// Set the new account (myAddress) as the default account
ain.wallet.setDefaultAccount(myAddress);

// Print defaultAccount (Need to backup your private key)
console.log(ain.wallet.defaultAccount);
// Example:
// {
//   address: '0x09A0d53FDf1c36A131938eb379b98910e55EEfe1',
//   private_key: '...',
//   public_key: '...'
// }