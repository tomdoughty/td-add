const core = require('@actions/core');
const { release } = require(process.env.GITHUB_EVENT_PATH);

module.exports = () => {
	console.log(release);
	core.setOutput('release', release);
}
