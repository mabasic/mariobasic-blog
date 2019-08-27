require("dotenv").config();

const siteMetadata = {
  title: `Blog by Laravelista`,
  name: `Laravelista`,
  siteUrl: `https://blog.laravelista.hr`,
  description: `Blog about latest things in full stack web development and in-depth posts about specific topics.`,
  hero: {
    heading: `After nearly two years without a blog, I'm starting over.`,
    maxWidth: 652,
  },
  social: [
    {
      name: 'github',
      url: `https://github.com/laravelista`,
    },
    {
      name: 'patreon',
      url: `https://www.patreon.com/laravelista`,
    },
    {
      name: 'paypal',
      url: `https://www.paypal.me/laravelista`,
    }
  ],
};

const plugins = [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allArticle } }) => {
            return allArticle.edges.map(edge => {
              return Object.assign({}, edge.node, {
                description: edge.node.excerpt,
                date: edge.node.date,
                url: site.siteMetadata.siteUrl + edge.node.slug,
                guid: site.siteMetadata.siteUrl + edge.node.slug,
                // custom_elements: [{ "content:encoded": edge.node.body }],
                author: edge.node.author
              })
            })
          },
          query: `
            {
              allArticle(sort: {order: DESC, fields: date}) {
                edges {
                  node {
                    excerpt
                    date
                    slug
                    title
                    author
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Laravelista's RSS Feed",
          description: "A blog without an RSS feed is just blah!",
          language: "en",
          copyright: '2019 Laravelista',
          managingEditor: 'Mario Bašić',
          webMaster: 'Mario Bašić',
          feed_url: 'https://blog.laravelista.hr/rss.xml',
          site_url: 'https://blog.laravelista.hr',
          image_url: 'https://blog.laravelista.hr/logo-rss.png',
        },
      ],
    },
  },
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Blog by Laravelista`,
      short_name: `Laravelista`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-102510377-3",
      anonymize: true,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://laravelista.us3.list-manage.com/subscribe/post?u=f7be246192e99544e6a92ef70&amp;id=9824b15791",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
