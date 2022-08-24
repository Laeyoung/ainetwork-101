curl -X POST 'https://testnet-api.ainetwork.ai/json-rpc' --header 'Content-Type: application/json' --data-raw '{
  "method": "ain_getTransactionPoolSizeUtilization",
  "params": {
    "protoVer": "1.0.0"
  },
  "jsonrpc": "2.0",
  "id": 1
}'