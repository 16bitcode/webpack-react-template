const path = require('path');

exports.getPath = (dir) => path.join(__dirname, '..', dir);
