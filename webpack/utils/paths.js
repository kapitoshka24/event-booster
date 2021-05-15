const path = require('path');

const paths = {
  SRC_DIR: path.resolve(__dirname, '../../src'),
  BUILD_DIR: path.resolve(__dirname, '../../build'),
  COPY_IMG: path.resolve(__dirname, '../../src/images'),
  BUILD_IMG: path.resolve(__dirname, '../../build/images'),
};

module.exports = paths;
