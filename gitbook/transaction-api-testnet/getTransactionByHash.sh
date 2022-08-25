# https://testnet-insight.ainetwork.ai/transactions/0x2c9ffeb45b3377471b8c88e07159cfe0156278338a6763f0e9437f0596239973

curl -X POST --header 'Content-Type: application/json' --data '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ain_getTransactionByHash",
  "params": {
    "protoVer": "1.0.9",
    "hash": "0x2c9ffeb45b3377471b8c88e07159cfe0156278338a6763f0e9437f0596239973",
    "index": 0
  }
}' https://testnet-api.ainetwork.ai/json-rpc
