module.exports = {
  presets: ['babel-preset-gatsby'],
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-object-rest-spread',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-classes',
      ],
    },
  },
};