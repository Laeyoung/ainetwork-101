curl -X POST --header 'Content-Type: application/json' --data '{
  "jsonrpc":"2.0",
  "id":1, 
  "method":"ain_get", 
  "params":{
    "type": "GET"
    "op_list": [
      {"ref": "afan/user123/balance","type": "GET_VALUE"},
      {"ref": "afan/$userId","type": "GET_RULE"}
    ]
  }
}' https://testnet-api.ainetwork.ai/json-rpc