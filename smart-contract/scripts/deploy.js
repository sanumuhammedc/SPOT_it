const hre = require('hardhat')

async function main() {
  const spotitCoinFactory = await hre.ethers.getContractFactory('SpotitCoin')
  const spotitCoin = await spotitCoinFactory.deploy()

  await spotitCoin.deployed()

  console.log('Spotit Coin deployed to:', spotitCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
