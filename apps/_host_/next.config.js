const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require('path');

const REMOTE_NEXT_APP_URL =
  process.env.NEXT_PUBLIC_REMOTE_NEXT_APP_URL || 'http://localhost:3001';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remoteNext: `remoteNext@${REMOTE_NEXT_APP_URL}/_next/static/${location}/remoteEntry.js?force=true`,
    remoteReact: `remoteReact@http://localhost:3002/remoteEntry.js`
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
