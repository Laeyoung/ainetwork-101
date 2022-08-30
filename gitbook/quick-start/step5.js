const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste from output of step2-3.js
const myAddress = {
  address: '0x85',
  private_key: '79',
  public_key: 'b6d'
}

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

// Transfer 10 AIN to ADDRESS_TO_SEND_AIN_TO
ain.wallet.transfer({
  from: myAddress, // Optional (defaultAccount will be used if omitted)
  to: ADDRESS_TO_SEND_AIN_TO, // e.g. 0x08Aed7AF9354435c38d52143EE50ac839D20696b
  value: 10
})
  .then((res) => {
    // The returned value will be either
    // { result, tx_hash } or { code, message, tx_hash },
    // depending on the result of the transaction.
    console.log(JSON.stringify(res));
  });