import babel from 'rollup-plugin-babel';

export default {
  external: ['react'],
  input: {
    // for tree shaking purpose
    cru: 'src/CRU.js',
    fiesta: 'src/Fiesta.js',
    fpg: 'src/FPG.js',
    greenPro: 'src/GreenPro.js',
    index: 'src/index.js',
    kinomax: 'src/Kinomax.js',
    lunaPrint: 'src/LunaPrint.js',
    netPoint: 'src/NetPoint.js',
    riaTomsk: 'src/RiaTomsk.js',
    sberbank: 'src/Sberbank.js',
    scCrystal: 'src/SCCrystal.js',
    solnechnyjGorod: 'src/SolnechnyjGorod.js',
    streetMedia: 'src/StreetMedia.js',
    theAquarelle: 'src/TheAquarelle.js',
    tomskjenergosbyt: 'src/Tomskjenergosbyt.js',
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
