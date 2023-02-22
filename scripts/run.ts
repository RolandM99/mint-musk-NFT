const hre = require("hardhat");
 
// The function main() is the entry point of the script. it does the following:
// It gets the contract factory for the "ElonNFT" contract, which allows it to deploy new instances of the contract.
// It deploys a new instance of the "ElonNFT" contract.It waits for the contract to be fully deployed to the Ethereum network.
// It logs a message to the console with the address of the deployed contract.
async function main() {
  // We get the contract to deploy
  const ElonNFT = await hre.ethers.getContractFactory("ElonNFT");
  const elon = await ElonNFT.deploy();
 
  await elon.deployed();
 
  console.log("ElonNFT deployed to:", elon.address);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
