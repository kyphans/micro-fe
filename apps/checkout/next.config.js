const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/data-context'],
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkout',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './checkout': './pages/checkout',
        },
        extraOptions: {
          exposePages: true
        },
        shared: ['tailwindcss']
      })
    );

    return config;
  }
};

module.exports = nextConfig;
