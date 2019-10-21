const siteMetadata = {
  title: `Blog | Laravelista`,
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
    },
    {
      name: 'digitalocean',
      url: `https://m.do.co/c/1bae3920f1e0`,
    }
  ],
};

const plugins = [
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
      articlePermalinkFormat: ":year/:month/:day/:slug"
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Blog | Laravelista`,
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

module.exports = {
  siteMetadata,
  plugins,
};
