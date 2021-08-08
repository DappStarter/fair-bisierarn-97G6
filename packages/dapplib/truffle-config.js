require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food charge rifle pitch purity gesture nature metal gaze'; 
let testAccounts = [
"0xc1a2d312125da372ec8e86486ea6105a1e0116280f406253d763bd56ba04222c",
"0x048e3d7b117926b7d230fb54053d7e7a91c1a9bf5928089b663871a584bd83b5",
"0x34b0523759b15c8e2a346c4c22c9007797978c4efa7ba39655177c781ec9c24a",
"0x7d2176deea77695be93711b16be362596c3df8c5ede74100953d2cd624921829",
"0x87b43ee548e71cd8b419318d03ecbbcb562e09cbcec9430605969f220e034d94",
"0x361293d1c9416890f62edbebec47bb6abd0f7d69a095118f77320aac0c139ad3",
"0xe0c33c44d8d7f6471043417164271f5426e00deaa31d89deaad7017a69b3b83b",
"0xd858055eda3483837cff2ad59c6ee4d21a49b4d11fc3b42037b6e9335a93ac57",
"0x6a68698142a4b2709a873af56267b2bbecfd8be34c1263aa7ea7e3ab77e1f108",
"0xd2e2e826f06d859387c6aee2db8836d7e3c2f229872b5dc82bfd59b14e3ed08e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

