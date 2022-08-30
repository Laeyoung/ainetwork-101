const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste private_key from step2-3.js
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.addAndSetDefaultAccount(private_key);

const appName = 'YOUR-UNIQUE-APP-NAME'; // Use your own app name
const appPath = `/apps/${appName}`;

// Create an app at /apps/${appName}. With the admin config below,
// only 'myAddress' will have owner & write permissions at /apps/${appName}.
ain.db
  .ref(`/manage_app/${appName}/create/${Date.now()}`)
  .setValue({
    value: {
      admin: {
        [myAddress]: true,
      },
      service: {
        staking: {
          lockup_duration: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
        },
      },
    },
    nonce: -1,
  })
  .then((res) => {
    // Check your transaction result at https://testnet-insight.ainetwork.ai/transactions/${YOUR-TX-HASH}
    console.log(`res: ${JSON.stringify(res)}`);
  });
