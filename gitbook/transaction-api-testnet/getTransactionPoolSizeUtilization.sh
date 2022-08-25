curl -X POST --header 'Content-Type: application/json' --data '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ain_getTransactionPoolSizeUtilization",
  "params": {
    "protoVer": "1.0.9"
  }
}' https://testnet-api.ainetwork.ai/json-rpc
