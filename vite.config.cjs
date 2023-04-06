const path = require('path');

module.exports = {
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				page1: path.resolve(__dirname, 'index.html'),
			},
			output: {
				format: 'es',
			},
		},
	},
};
