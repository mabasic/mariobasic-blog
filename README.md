# Laravelista Blog

- [x] Google Analytics tracking; **GDPR compliant**
- [x] Mailchimp; **GDPR compliant**
- [x] Structured data for SEO
- [x] 404 Page not found
- [x] Privacy notice
- [x] Secret posts
- [x] RSS feed

## Modifications from the default theme

- Added button to 404 page to go to the home page.
- Added links in footer.
- Changed 404 page text.
- Changed logo ofc.
- Changed subscription text.
- Changed subscription to be GDPR compliant.
- Removed articles gradient from the home page.
- Removed footer gradient.

## Development

Use these commands to install dependencies and to run `gatsby develop` for development purposes.

```
yarn install
yarn develop
```

### Testing RSS feed and/or Structured data

The feed is only generated when using `yarn build`, so to test it first we need to build and then serve:

```
yarn build
gatsby serve
```

### Using the forked remote dependency

```
yarn upgrade {package}@{repository}#{branch}
yarn upgrade @narative/gatsby-theme-novela@https://github.com/mabasic/gatsby-theme-novela.git#bugfix/component-shadowing
```

#### Known issues

1. Can't get this method to work because the forked repository contains yarn workspaces while the theme npm package contains just the theme. **Hint:**Look into git submodules and subtree.