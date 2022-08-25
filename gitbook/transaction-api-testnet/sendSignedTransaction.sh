

curl -X POST --header 'Content-Type: application/json' --data '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ain_sendSignedTransaction",
  "params": {
    "protoVer": "1.0.9",
    "signature": "0xdb61ef...FILL_THIS",
    "transaction":{
       "nonce":123,
       "timestamp":1566736760322,
       "operation":{
         "ref":"/account/0x04aac78e17374fd075d1f11bfe95ef7d8e4ed812/balance",
         "type":"SET_VALUE",
         "value":1000
       },
       "parent_tx_hash":"0x88df016429689c079f3b2f6ad39fa052532c56..."
     }
  }
}' https://testnet-api.ainetwork.ai/json-rpc
