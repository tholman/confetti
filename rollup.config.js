const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const babel = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/Confetti.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      modules: true,
      inject: true,
      minimize: true,
      sourceMap: true,
      plugins: [require('autoprefixer')],
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: ['react', 'react-dom'],
};
