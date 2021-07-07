module.exports = {
  siteName: 'David John',
  siteDescription: 'This is the portfolio of David John.',
  siteUrl: 'https://stoiclord.netlify.app/',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}