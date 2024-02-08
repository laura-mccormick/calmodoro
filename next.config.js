/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      basePath: "/pomodoro",
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
