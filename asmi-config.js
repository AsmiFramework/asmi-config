var config = require('config');

for (var mod in config.modules) {
	config.modules[mod].global = config.global;
	config.modules[mod].events = config.events;
	if (config.tpServices) {
		for (svc in config.tpServices) {
			if (!config.modules[mod][svc]) {
				config.modules[mod][svc] = config.tpServices[svc];
			}
		}
	}
}

module.exports = exports = config;
