var Web3 = require('web3');
var web3 = new Web3('https://rpc.thaifi.com');
privKey = "fc4332dd257d44365d9c06e2c9e77e087ce9119e8dfb38cec8715340f07357dc"
// public key  0xd6f5A25260D4741C9c458a4b3bD3Ba5b7d95833F
async function main() {
  const signObject = await web3.eth.accounts.sign("Hello world", privKey);
  console.log(signObject)
  const getSigner = web3.eth.accounts.recover('Hello world', signObject.signature);
  console.log(getSigner)  // 0xd6f5A25260D4741C9c458a4b3bD3Ba5b7d95833F

}

main();


