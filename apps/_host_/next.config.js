const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require('path');

const CHECKOUT_APP_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_APP_URL || 'http://localhost:3001';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    checkout: `checkout@${CHECKOUT_APP_URL}/_next/static/${location}/remoteEntry.js?force=true`,
    remote: `remote@http://localhost:3003/remoteEntry.js`
  };
};

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/data-context'],
  output: 'standalone',
  experimental: {
    // https://nextjs.org/docs/13/pages/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        shared: ['tailwindcss']
      })
    );

    return config;
  }
};
