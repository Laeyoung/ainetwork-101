const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Import the account you've created in Step 3.
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.defaultAccount.address;ain.wallet.addAndSetDefaultAccount(private_key);

const appName = 'YOUR-UNIQUE-APP-NAME'; // from step7.js
const appPath = `/apps/${appName}`;

async function main() {
  // Set a value at a path and trigger the previously set function.
  const userMessagePath = `${appPath}/messages/${myAddress}`;
  await ain.db.ref(`${userMessagePath}/${Date.now()}/user`).setValue({
    value: 'Hello!',
    nonce: -1,
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  });

  // Check that the value is set correctly. If the echo bot is alive,
  // it should have written a response to your message.
  await ain.db.ref(userMessagePath).getValue()
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
    /*
    {
      "1631691438245": {
        "user": "Hello!",
        "echo-bot": "Did you mean \"Hello!\"?" // Written by the echo bot.
      }
    }
    */
  });
}

main();


