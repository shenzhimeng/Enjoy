const { BigNumber } = require("ethers")

function fromHex(hexString) {
    return BigNumber.from(hexString).toNumber()
}

function toHex(num) {
    return BigNumber.from(num).toHexString()
}

function isHex(possibleHexString) {
    return /^0x[0-9a-fA-F]+$/.test(possibleHexString)
}


module.exports.fromHex = fromHex
module.exports.toHex = toHex
module.exports.isHex = isHex
