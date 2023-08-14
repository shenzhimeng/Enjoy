const { ethers, Wallet, providers, utils, BigNumber } = require('ethers')

const erc20abi = require('../json/ERC20ABI.json')

function sleep(ms) {
    if (ms == 0) return
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getTokenBalance(wallet, tokenAddress) {
    let contract = new ethers.Contract(tokenAddress, erc20abi, wallet)
    let num = await contract.balanceOf(wallet.address)
    return num.toString()
}

exports.sleep = sleep
exports.getTokenBalance = getTokenBalance
