const path = require("path");

const env = process.env.NODE_ENV;

exports.getPath = (dir) => path.join(__dirname, "..", dir);

exports.IS_PROD = env === "production";

exports.IS_DEV = env === "development";

exports.IS_TEST = env === "test";

exports.IS_ANA = process.env.IS_ANA === "true";
