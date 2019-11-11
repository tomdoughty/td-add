//const core = require('@actions/core');

async function run() {
	console.log(JSON.stringify(process.env));
	
	// const event = core.getInput('event', { required: true });
	// console.log(JSON.stringify(event));
}

module.exports = run;