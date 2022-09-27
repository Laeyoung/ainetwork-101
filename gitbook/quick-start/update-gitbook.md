# Edit 및 Update 필요

### [Step4](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-4.-get-ain-for-free)

1. https 주소로 바꿔야함
2. 의견1) `We have a faucet site that gives you 100 AIN per day (valid only on the Testnet)` 보다 Testnet에 AIN이 들어간다고 말하는게 맞지 않으려나?
3. 의견2) faucet 주소도 testnet 이 명시 되는게 맞지 않으려나?

### [Step5](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-5.-transfer-ain)

1. Step 3에서 만든 private key를 안 쓰고 새로 생성함. 그러면 step 4를 또 다시 해야함. 하지만 벌써 코드가 다 실행되어서 순서상 안 맞음.
2. `ADDRESS_TO_SEND_AIN_TO` 를 넣는게 무척 막막함. 여기서는 그냥 address를 알려주는게 맞을 것 같음. (괜찮으면 이거 쓰세요 0x99bBa0051DDdf7b69972602512661915fdD8eE89). 저 sample address에 쌓인 AIN이나 TX로 Quick Start를 몇명이나 진행 했는지 간접적으로 알 수 있음. Testnet이 reset 되기 전까지는.
    - yoojin) 고정된 address를 줄 경우 AI network insight 링크로 직접 계정 정보 페이지로 넘겨주는 링크도 첨부하면 좋을 것 같음.
      https://testnet-insight.ainetwork.ai/accounts/0x99bBa0051DDdf7b69972602512661915fdD8eE89
      -> 이 경우 간단한 insight ui 설명 이미지나 docs의 insight 파트 링크도 추가되면 좋을 듯.
      --> 현재 insight에서는 account 정보에서 balance의 변화로만 transfer 결과를 확인할 수 있음. (tx 확인 불가)
3. Faucet은 1 AIN을 주는데, step 5에서는 10 AIN을 보내라고 함. 0.1 AIN 정도로 바꾸면 좋을 듯

### [Step6](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-6.-optional-setting-the-nonce-of-your-transaction)

1. 이 내용이 필요한가? Quick Start에? 이걸 쓰는 경우가 있는가?

### [Step7](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-7.-create-your-own-app)

1. 코드 들여쓰기가 이상함
2. const appName = 'ainetwork_101-0x80028' 이 이름으로는 안 만들어지는데 에러 메세지로는 뭐 때문인지 알 수 가 없음.
3. appName 중복일 때도 에러 메세지로 알 수가 없음. insight appName 뭐 쓰고 있나 확인해 보라고 해야할듯
4. 의견) Create App 말고 Register App 이런 표현 맞는거 같은데?
5. insight에서 보는 내가 만든 app에 관련된 상세 설명 링크가 필요할듯
6. getOwner() fuction 체크하는 코드가 await를 안 써서, 순서대로 된다는 보장을 해 줄 수 

### [Step8](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-8.-publish-your-own-app)

1. Step 7에서 했던 Create App은 뭐고, Step 8에서 하는 Publish App은 뭔가?

### [Step9](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-9.-set-an-event-listener)

1. 이게 무슨 말이야...
2. https://testnet-insight.ainetwork.ai/database/values/manage_app/ainetwork101_7 에 trigger에 대한 정보가 등록 되어야 하는거 아닌가? 어디간거니?
3. $user_addr 에 대한 설명 필요
4. $timestamp 에 대한 설명 필요
5. /user 에 대한 설명 필요
6. http://echo-bot.ainetwork.ai/trigger 가 어떤 건지에 대한 설명 필요
7. http://echo-bot.ainetwork.ai/trigger 를 https로 바꿔야함
8. yoojin) url의 $ 붙은 부분이 wild card라면 "$ is Wild card" 처럼 수정하는게 더 직관적일 것 같음.

### [Step10](https://docs.ainetwork.ai/ain-blockchain/developer-guide/getting-started#step-10.-set-values)

1. getValue()를 Full code가 아니라 setValue() 다음에 바로 이어붙일 수 있도록  하는 것이 따라하기 더 쉬움.

### 전체 내용

- Quick Start인데 너무 내용이 많지 않은가? Section이라도 나뉘어 있으면 어떨까요? 현재 구조상 Step 1 ~ 5 (일반적으로 블록체인에서는 다 있는 코인 보내기), Step 7 ~ 10 정도 (AI Network 특징)?
- 전체적으로 이전 step에서 수행된 코드는 이후에는 중복해서 써놓지 않는게 step을 따라가기 더 수월함.
