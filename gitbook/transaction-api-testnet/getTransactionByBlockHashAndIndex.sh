# https://testnet-insight.ainetwork.ai/blocks/1018739
# https://testnet-insight.ainetwork.ai/transactions/0x2c9ffeb45b3377471b8c88e07159cfe0156278338a6763f0e9437f0596239973

curl -X POST --header 'Content-Type: application/json' --data '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ain_getTransactionByBlockHashAndIndex",
  "params": {
    "protoVer": "1.0.9",
    "block_hash": "0x38635f8c1b3ecfaa8314698ac241341dc3ba82bc1d26e4fb5c20e21fe9ce2645",
    "index": 0
  }
}' https://testnet-api.ainetwork.ai/json-rpc
