// configuration for truffle project
// defines deployment and compilation settings

require('regenerator-runtime/runtime')
const HDWalletProvider = require("@truffle/hdwallet-provider");


require('dotenv').config();

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 10000000,
      gasPrice: 0
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.WEB3_HTTP_PROVIDER_ROPSTEN)
      },
      network_id: 3,
      gas: 5250000,
      //from: ''
    },

    mainnet: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.WEB3_HTTP_PROVIDER_MAINNET)
      },
      network_id: 1
    },
  },

  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 10000
        }
      }
    },
  },

  mocha: {
    timeout: 5000
  },

  plugins: ["truffle-contract-size"]
};
