// deploy geyser factory

const GeyserFactory = artifacts.require('GeyserFactory');

// set address of GYSR token contract
const GYSR_ADDRESS = '0xd0f0c40fcd1598721567f140ebf8af436e7b97cf';

module.exports = function (deployer) {
    deployer.deploy(GeyserFactory, GYSR_ADDRESS);
}
