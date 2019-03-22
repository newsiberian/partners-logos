import babel from 'rollup-plugin-babel';

export default {
  input: {
    asc: 'src/ASC.js',
    fpg: 'src/FPG.js',
    index: 'src/index.js',
    netPoint: 'src/NetPoint.js',
    scCrystal: 'src/SCCrystal.js',
  },
  output: [
    {
      dir: 'lib/esm',
      format: 'esm',
    },
    {
      dir: 'lib/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
