import babel from 'rollup-plugin-babel';

export default {
  external: ['react'],
  input: {
    // for tree shaking purpose
    CRULogo: 'src/CRU.js',
    FiestaLogo: 'src/Fiesta.js',
    FPGLogo: 'src/FPG.js',
    FrescoAgencyLogo: 'src/FrescoAgency.js',
    GravityPointLogo: 'src/GravityPoint.js',
    GreenProLogo: 'src/GreenPro.js',
    HraniteliDetsvaLogo: 'src/HraniteliDetsva.js',
    index: 'src/index.js',
    JordanLogo: 'src/Jordan.js',
    KFCLogo: 'src/KFC.js',
    KinomaxLogo: 'src/Kinomax.js',
    KudesyLogo: 'src/Kudesy.js',
    LunaPrintLogo: 'src/LunaPrint.js',
    MegaFonLogo: 'src/MegaFon.js',
    NetPointLogo: 'src/NetPoint.js',
    OtkryvajaGorizontyLogo: 'src/OtkryvajaGorizonty.js',
    PekarJaLogo: 'src/PekarJa.js',
    PowerHlsClubLogo: 'src/PowerHlsClub.js',
    RiaTomskLogo: 'src/RiaTomsk.js',
    SberbankLogo: 'src/Sberbank.js',
    ScCrystalLogo: 'src/SCCrystal.js',
    SmileClinicLogo: 'src/SmileClinic.js',
    SolnechnyjGorodLogo: 'src/SolnechnyjGorod.js',
    StreetMediaLogo: 'src/StreetMedia.js',
    TheAquarelleLogo: 'src/TheAquarelle.js',
    TomskjenergosbytLogo: 'src/Tomskjenergosbyt.js',
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
