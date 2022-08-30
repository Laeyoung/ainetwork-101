const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste private_key from step2-3.js
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.addAndSetDefaultAccount(private_key);

const appName = 'YOUR-UNIQUE-APP-NAME'; // Use your app name from step7_1.js
const appPath = `/apps/${appName}`;

// Check the owner permissions have been set properly.
ain.db
  .ref(appPath)
  .getOwner()
  .then((res) => {
    console.log(JSON.stringify(res, null, 2));
  });
