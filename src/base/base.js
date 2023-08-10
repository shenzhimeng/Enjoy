const { ethers, Wallet, providers, utils, BigNumber } = require('ethers')

function sleep(ms) {
    if (ms == 0) return
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.sleep = sleep
