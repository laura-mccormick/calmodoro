/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/pomodoro",
  webpack(config, options) {
    config.module.rules.push({
      output: "export",
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};
