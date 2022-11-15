import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("SomeNFT", function () {
  let someNFT;
  beforeEach(async function () {
    const SomeNFT = await ethers.getContractFactory("SomeNFT");
    someNFT = await upgrades.deployProxy(SomeNFT, [], {
      kind: "uups",
      unsafeAllow: ["constructor"],
    });
    await someNFT.deployed();
  });

  it("says its name", async function () {
    const name = await someNFT.name();
    expect(name).to.eq("SomeNFT");
  });
});
