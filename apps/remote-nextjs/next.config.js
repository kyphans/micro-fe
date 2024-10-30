const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/data-context'],
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteNext',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './RemoteNext': './pages/RemoteNext'
          //https://github.dev/module-federation/module-federation-examples/tree/master/nextjs-dynamic-ssr
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
