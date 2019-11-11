const core = require('@actions/core');
const eventPath = require('/home/runner/work/_temp/_github_workflow/event.json');

async function run() {
	console.log(JSON.stringify(process.env));
	console.log(JSON.stringify(eventPath.release));
	core.setOutput('upload_url', eventPath.release.upload_url);
}

module.exports = run;
