const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste private_key from step2-3.js
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.addAndSetDefaultAccount(private_key);

const appName = 'YOUR-UNIQUE-APP-NAME'; // from step7.js
const appPath = `/apps/${appName}`;

async function main() {
  // (before) Get write rules.
  await ain.db
    .ref(appPath)
    .getRule()
    .then((res) => {
      console.log('Before - getRule():');
      console.log(`${JSON.stringify(res, null, 2)}\n`);
    });

  // Set write rules.
  await ain.db
    .ref(appPath)
    .setRule({
      value: {
        '.rule': {
          write: true, // Anyone can write values at the appPath.
        },
      },
      nonce: -1,
    })
    .then((res) => {
      console.log('Call setRule():');
      console.log(`${JSON.stringify(res, null, 2)}\n`);
    });

  // (after) Get write rules.
  await ain.db
    .ref(appPath)
    .getRule()
    .then((res) => {
      console.log('After - getRule():');
      console.log(`${JSON.stringify(res, null, 2)}\n`);
    });
}

main();
