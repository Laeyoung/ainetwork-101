const axios = require('axios');
const _ = require('lodash');

const queryOnNode = (method, params) => {
    return axios.post(
        'https://dev-api.ainetwork.ai/json-rpc',   // dev cluster
        {
            method,
            params: Object.assign(params, { protoVer: '1.0.0' }),
            jsonrpc: '2.0',
            id: 1
        }
    ).then((resp) => {
        console.log(resp)
        return _.get(resp, 'data.result.result');
    }).catch((err) => {
        console.error(`Failed to send get request: ${err}`);
        return null;
    });
}

queryOnNode('ain_getBalance', {
    address: 'ADDRESS_YOU_WANT',
}).then(result => console.log(result))
