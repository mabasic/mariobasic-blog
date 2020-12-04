const siteMetadata = {
  title: `Mario Bašić - Full Stack Developer`,
  name: `Mario Bašić`,
  siteUrl: `https://blog.mariobasic.com`,
  description: ``,
  hero: {
    heading: `I'm a full Stack PHP/JavaScript developer from Croatia.`,
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
      name: `Mario Bašić - Full Stack Developer`,
      short_name: `Mario Bašić`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://laravelista.us3.list-manage.com/subscribe/post?u=f7be246192e99544e6a92ef70&amp;id=9824b15791",
    },
  },
  {
    resolve: `gatsby-plugin-plausible`,
    options: {
      domain: `mariobasic.com`,
      // Currently when using a custom domain with self-hosted plausible, the script
      // path will incorrectly point to index.js. Here we force the correct path...
      // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49
      customDomain: `plausible.laravelista.com/js/plausible.js?original=`,
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
