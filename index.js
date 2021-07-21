const { sendTransaction, getAccountBalance } = require("./utils/ethAPI");
const {
  mmAcc1,
  mmAcc2,
  mmAcc1PrivateKey,
  mmAcc2PrivateKey,
} = require("./keys");

const sendingAddress = "0x3E8a3803a3850c2EB1260ad1a389422Ca33173Ca";
const privateKey =
  "5ff1ac4a8aafca5e2a94a4ef210d9d679e4487a2eb5e82e457bec07a8fbd2230";
const receivingAddress = "0x2047772d6588aAf463f45e9e493dB91Ef1242708";
const amount = 0.5;

sendTransaction(sendingAddress, receivingAddress, amount, privateKey);
// sendTransaction(mmAcc1, mmAcc2, amount, mmAcc1PrivateKey);
// getAccountBalance(mmAcc1);
// getAccountBalance(mmAcc2);
