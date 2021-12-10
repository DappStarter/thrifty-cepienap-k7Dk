require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note mirror puppy harvest clock obscure thunder'; 
let testAccounts = [
"0xfa1f95421f93cbc670d79dcb23ce66d49a941003bfe381575be29da506b10116",
"0x6bc79adc329065fcfa878a514fcbb7efc0909c2b3b537b7f2db4e56c2ce011de",
"0x01e853df6c82e458842d9663bf7436a4614a0599a5e10a15705731c1147465bf",
"0xec9b511b21fa9a30c22c202704b6b1168e536ef5ae0a8024c0062fc2b1a6fd36",
"0x9c0ff1afb25e0079f7c4fc1767ebd7f99ae068c9841f493a1655487a56ee20d3",
"0xa01b25eb6bd767d58e1adebb1e55645ce26c075eab8aec573497f82c0cc8ca02",
"0x82ecec2763523d6aad318e14cc8a0e681c54c799f5197ab33d39d93f3f42566a",
"0x948b7bdc0eb3cb9ba553ac1c26dd8db20632d6512a36343af8d9f9b3c280684e",
"0x8833fbec3b427602b35b4f94a767d0b9c5e81f0fe2a21a199919515505bd7802",
"0xa70a06314047c067ce18863160fd59c83a0d846a23b2d52131f2d413bffa82e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


