module.exports = (api) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: api.env('test') ? 'commonjs' : false,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
        allExtensions: true,
        isTSX: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'styled-components',
      {
        pure: true,
        fileName: false,
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
});
