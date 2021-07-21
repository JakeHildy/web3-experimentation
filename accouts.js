const Web3 = require('web3');
const URL = 'https://mainnet.infura.io/v3/0eed1fcfd57c445796f1cbb23fbb2a44';
const randomAddress = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';
const batAbi = require('./bat-abi.json');
const batAddress = '0x0D8775F648430679A709E98d2b0Cb6250d2887EF';

const web3 = new Web3(URL);

// web3.eth.getBalance(randomAddress, (err, bal) => {
//   console.log(web3.utils.fromWei(bal, 'ether'));
// });

// web3.eth.getTransactionCount(randomAddress).then((count) => {
//   console.log(count);
// });

// web3.eth.getBlockNumber().then((num) => {
//   console.log(num);
// });

// console.log(web3);

const contract = new web3.eth.Contract(batAbi, batAddress);
console.log(contract.methods);

contract.methods.name().call((err, result) => {
  console.log('name:', result);
});
contract.methods.totalSupply().call((err, result) => {
  console.log('total supply: ', result);
});
contract.methods.decimals().call((err, result) => {
  console.log('decimals: ', result);
});
contract.methods.tokenExchangeRate().call((err, result) => {
  console.log('token exchange rate: ', result);
});
contract.methods.version().call((err, result) => {
  console.log('version: ', result);
});
contract.methods.tokenCreationCap().call((err, result) => {
  console.log('token creation cap: ', result);
});
contract.methods.symbol().call((err, result) => {
  console.log('symbol: ', result);
});
