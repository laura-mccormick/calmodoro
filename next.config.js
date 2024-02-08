/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath: "/pomodoro",
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};
