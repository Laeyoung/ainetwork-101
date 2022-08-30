# Edit 및 Update 필요

### [Step4](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-4.-get-ain-for-free)

1. https 주소로 바꿔야함
2. 의견1) `We have a faucet site that gives you 100 AIN per day (valid only on the Testnet)` 보다 Testnet에 AIN이 들어간다고 말하는게 맞지 않으려나?
3. 의견2) faucet 주소도 testnet 이 명시 되는게 맞지 않으려나?

### [Step5](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-5.-transfer-ain)

1. Step 3에서 만든 private key를 안 쓰고 새로 생성함. 그러면 step 4를 또 다시 해야함. 하지만 벌써 코드가 다 실행되어서 순서상 안 맞음.
2. `ADDRESS_TO_SEND_AIN_TO` 를 넣는게 무척 막막함. 여기서는 그냥 address를 알려주는게 맞을 것 같음. (괜찮으면 이거 쓰세요 0x99bBa0051DDdf7b69972602512661915fdD8eE89). 저 sample address에 쌓인 AIN이나 TX로 Quick Start를 몇명이나 진행 했는지 간접적으로 알 수 있음. Testnet이 reset 되기 전까지는.
3. Faucet은 1 AIN을 주는데, step 5에서는 10 AIN을 보내라고 함. 0.1 AIN 정도로 바꾸면 좋을 듯

### [Step6](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-6.-optional-setting-the-nonce-of-your-transaction)

1. 이 내용이 필요한가? Quick Start에? 이걸 쓰는 경우가 있는가?

### [Step7](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-7.-create-your-own-app)

1. 이 내용이 필요한가? Quick Start에? 이걸 쓰는 경우가 있는가?

### 전체 내용

- Quick Start인데 너무 내용이 많지 않은가? Section이라도 나뉘어 있으면 어떨까요? 현재 구조상 Step 1 ~ 5 (일반적으로 블록체인에서는 다 있는 코인 보내기), Step 7 ~ 10 정도 (AI Network 특징)?