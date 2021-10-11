module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/profile/posts/makerlogs',
        permanent: true,
      },
      {
        source: '/profile/posts',
        destination: '/profile/posts/makerlogs',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['media.graphcms.com'],
  },
};
