const MyToken = artifacts.require("MyToken.sol");
const TokenReceiver = artifacts.require("TokenReceiver.sol")


const dotenv = require('dotenv')
result = dotenv.config({ path: "../.env" })

if (result.error) {
    console.log("Fail to load .env varilable: migrations.2_deploy_contracts")
    throw result.error
}

module.exports = async function (deployer) {
    await deployer.deploy(MyToken, process.env.INITIAL_TOKEN);
    await deployer.deploy(TokenReceiver)
};
