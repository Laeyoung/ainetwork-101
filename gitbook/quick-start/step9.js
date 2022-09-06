const Ain = require('@ainblockchain/ain-js').default;
const ain = new Ain('https://testnet-api.ainetwork.ai', 0);

// Copy and paste private_key from step2-3.js
const private_key = 'COPY-AND-PASTE-PRIVATE-KEY';
const myAddress = ain.wallet.addAndSetDefaultAccount(private_key);

const appName = 'YOUR-UNIQUE-APP-NAME'; // from step7.js
const appPath = `/apps/${appName}`;

async function main() {
  // Set a function to be triggered when writing values at the functionPath.
  const functionPath = `${appPath}/messages/$user_addr/$timestamp/user`; // Wild cards!
  console.log('function path: ', functionPath);
  await ain.db
    .ref(functionPath)
    .setFunction({
      value: {
        '.function': {
          'my-bot-trigger': {
            // Use your own function id
            function_type: 'REST',
            function_url: 'http://echo-bot.ainetwork.ai/trigger', // An endpoint to your event listener server
            function_id: 'my-bot-trigger', // Use your own function id
          },
        },
      },
      nonce: -1,
    })
    .then((res) => {
      console.log(JSON.stringify(res, null, 2));
    });

  await ain.db
    .ref(functionPath)
    .getFunction()
    .then((res) => {
      console.log('\ngetFunction():');
      console.log(JSON.stringify(res, null, 2));
    });
}

main();
