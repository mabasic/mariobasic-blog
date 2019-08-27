# Laravelista Blog

- [x] Google Analytics tracking; GDPR compliant
- [x] Mailchimp; GDPR compliant
- [x] RSS feed
- [ ] Write "welcome back" post with updates from when the blog closed down.
- [x] Write post for "Novela" theme installation and configuration instruction.
- [ ] Footer link to main website, privacy notice and rss feed. Waiting for Gatsby.

## Development

Use these commands to install dependencies and to run `gatsby develop` for development purposes.

```
yarn install
yarn develop
```

### Testing RSS feed

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