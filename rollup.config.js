import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';

const config = {
	input: pkg.source,
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true
		},
		{ 
			file: pkg.module, 
			format: 'esm',
			sourcemap: true 
		}
	],
	plugins: [
		external(),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		}),
		del({ targets: ['dist/*'] }),		
		copy({
      targets: [{
        src: "src/i18n",
				dest : "dist"
			}]
    })
	],
	external: Object.keys(pkg.peerDependencies || {}),
};

export default config;