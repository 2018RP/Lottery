const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider(
	'pear hedgehog snap leave furnace toward measure body awesome sorry cattle donate',
	'https://rinkeby.infura.io/v3/21be973aad844bedb359a8a8b6df91b6'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: '0x' + bytecode})
		.send({ from: accounts[0]});

	console.log('Contract deployed to', result.options.address);
};

deploy();
