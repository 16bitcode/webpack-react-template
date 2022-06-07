module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: { version: "3.8", proposals: true },
        targets: {
          browsers: [">0.25%", "not ie 11", "not op_mini all"],
        },
      },
    ],
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
    ["@babel/preset-react"],
  ];
  const plugins = ["@babel/plugin-transform-typescript"];

  return {
    presets,
    plugins,
  };
};
