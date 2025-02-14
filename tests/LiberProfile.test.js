const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LiberProfile", function () {
  let LiberProfile, contract, owner;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    LiberProfile = await ethers.getContractFactory("LiberProfile");
    contract = await LiberProfile.deploy();
  });

  it("Deve mintar um novo domínio", async () => {
    await contract.mintDomain("alice.eth");
    expect(await contract.getDomain(0)).to.equal("alice.eth");
  });
});
