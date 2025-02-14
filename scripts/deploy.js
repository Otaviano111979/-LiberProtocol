const { ethers } = require("hardhat");

async function main() {
  const LiberProfile = await ethers.getContractFactory("LiberProfile");
  const contract = await LiberProfile.deploy();
  await contract.waitForDeployment();
  console.log("Contrato deployado em:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
