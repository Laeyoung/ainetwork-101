const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste private_key from step2-3.js
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.addAndSetDefaultAccount(private_key);

/**
 * Transfer 0.1 AIN to 0x99bBa0051DDdf7b69972602512661915fdD8eE89
 *
 * And then,
 * check your transaction at https://testnet-insight.ainetwork.ai/transactions/${YOUR-TX-HASH},
 * or check receiver's address at https://testnet-insight.ainetwork.ai/accounts/0x99bBa0051DDdf7b69972602512661915fdD8eE89
 */
ain.wallet
  .transfer({
    from: myAddress, // Optional (defaultAccount will be used if omitted)
    to: '0x99bBa0051DDdf7b69972602512661915fdD8eE89',
    value: 0.1,
  })
  .then((res) => {
    // The returned value will be either
    // { result, tx_hash } or { code, message, tx_hash },
    // depending on the result of the transaction.
    console.log(JSON.stringify(res));
  });
