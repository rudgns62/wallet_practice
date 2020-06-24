import web3 from "web3";

const web3 = new Web3();

const privateKey = "6E3749ADD9F30E1139822359B27CD077111E15429BCB5DD9DD61BA3FC163F6B8"
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

console.log(account);