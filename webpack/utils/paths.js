const path = require('path');

const paths = {
  SRC_DIR: path.resolve(__dirname, '../../src'),
  BUILD_DIR: path.resolve(__dirname, '../../build'),
  COPY_DIR: path.resolve(__dirname, '../../src/images'),
  COPY_DIR_B: path.resolve(__dirname, '../../build/images'),
};

module.exports = paths;
