const path = require('path');

module.exports = function({ env, paths }) {
  return {
    webpack: {
      alias: {
        environment: path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV || 'production')
      }
    },
    jest: {
      configure: {
        testPathIgnorePatterns: [
          "<rootDir>/src/environments/"
        ],
        moduleNameMapper: {
          environment: "<rootDir>/src/environments/test"
        },
      }
    }
  };
};
