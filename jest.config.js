module.exports = {
    transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/react-native-sqlite-storage' ],
}