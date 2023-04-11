const hre = require("hardhat");

async function main() {
  const Estio =await hre.ethers.getContractFactory("Estio");
  const estio = await Estio.deploy();

  await estio.deployed();

  console.log(`Contract deployed to ${estio.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
