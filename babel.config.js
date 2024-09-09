module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
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
          '~Style': './src/Style',
          '~Store': './src/Store',
          '~Services': './src/Services',
          '~Components': './src/Components',
          '~Navigators': './src/Navigators',
          '~Screens': './src/Screens',
          '~Translation': './src/Translation',
          '~Assets': './src/Assets',
          '~Configs': './src/Configs',
          '~Hooks': './src/Hooks',
          '~Contexts': './src/Contexts',
          '~Features': './src/Features',
          '~Utils': './src/Utils',
          '~Constants': './src/Constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
