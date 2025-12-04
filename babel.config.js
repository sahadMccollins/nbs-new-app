module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          test: './test',
          underscore: 'lodash',
          '@src': './src',
          '@otherComponent': './src/otherComponent',
          '@theme': './src/theme',
          '@commonComponents': './src/commonComponents',
          '@style': './src/style',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@App': './App',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
