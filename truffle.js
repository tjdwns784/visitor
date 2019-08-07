// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001' // Baobab Network 고유 ID
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651' // Baobab TestNET
const PRIVATE_KEY = '0x606d98f621fea7c61cd0ecff14078a9e4ec0b04d42acdf36b1595f2574ed908e'
module.exports = {
    networks: {

        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null, // Baobab Network 에서 자동으로 값 지정
        }
    }
}