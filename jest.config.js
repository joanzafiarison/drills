module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/react-native-sqlite-storage' ],
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions : ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node']
}