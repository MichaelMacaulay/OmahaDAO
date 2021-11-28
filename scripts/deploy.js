const hre = require("hardhat");

async function main() {

  const BRKA = await hre.ethers.getContractFactory("OmahaDAO");
  const brka = await BRKA.deploy();

  const sBRKA = await hre.ethers.getContractFactory("stakedOmahaDAO");
  const sbrka = await sBRKA.deploy();

  await brka.deployed();
  await sbrka.deployed();

  console.log("BRKA deployed to:", brka.address);
  console.log("sBRKA deployed to:", sbrka.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
