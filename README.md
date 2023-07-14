# phoenix

## Requirements

1. Node.js + npm. Versions are defined in `./package.json`
2. `.env.local` file with predefined values
   ```
   SITE=http://localhost:3000
   ```

## Troubleshooting

### Automatic local code checking before commit

Run `npx husky install` to install husky which will check code on pre-commit hook

### Dynamic imports

To import something dynamically file extension have to be provided. See more [here](https://github.com/withastro/astro/issues/3373)

## TODO

- mobile styles
- no js mode for projects
- reimplement header
- articles styling
- work on a11y for projects
- seo issues
- replace favicon
- custom 404 page https://docs.astro.build/en/core-concepts/astro-pages/
- basic e2e tests
- analize if rem is good unit to use for offsets etc
