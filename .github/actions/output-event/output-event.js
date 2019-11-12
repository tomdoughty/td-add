const core = require('@actions/core');
const { release } = require(process.env.GITHUB_EVENT_PATH);

module.exports = () => {
	Object.entries(release).forEach(([key, value]) => {
		console.log(key, value);
		core.setOutput(key, value);
	});
};
