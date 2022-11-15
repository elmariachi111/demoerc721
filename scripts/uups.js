const { ethers, upgrades } = require("hardhat");

async function main() {
  const SomeNFTV1 = await ethers.getContractFactory("SomeNFT");
  const someNFTV1 = await upgrades.deployProxy(SomeNFTV1, [], { kind: 'uups', unsafeAllow: ['constructor'] });
  await someNFTV1.deployed();
  console.log(`SomeNFT  V1 is deployed to proxy address: ${someNFTV1.address}`);

  let versionAwareContractName = await someNFTV1.getContractNameWithVersion();
  console.log(`Pattern and Version: ${versionAwareContractName}`);

  // const UupsProxyPatternV2 = await ethers.getContractFactory("UupsProxyPatternV2");
  // const upgraded = await upgrades.upgradeProxy(uupsProxyPatternV1.address, UupsProxyPatternV2, { kind: 'uups', unsafeAllow: ['constructor'], call: 'initialize' });
  // console.log(`UUPS Proxy Pattern V2 is upgraded in proxy address: ${upgraded.address}`);

  // versionAwareContractName = await upgraded.getContractNameWithVersion();
  // console.log(`UUPS Pattern and Version: ${versionAwareContractName}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});