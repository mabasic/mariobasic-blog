# Laravelista Blog

- [x] Google Analytics tracking; GDPR compliant
- [x] Mailchimp; GDPR compliant
- [x] RSS feed
- [ ] Write "welcome back" post with updates from when the blog closed down.
- [ ] Write post for "Novela" theme installation and configuration instruction.
- [ ] Footer link to main website, privacy notice and rss feed.

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