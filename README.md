# phoenix

## Development

1. Node.js + npm. Versions are defined in `./package.json`
2. `.env.local` file with predefined values
   ```
   SITE=http://localhost:3000
   ```

### Working with git

Projects use `feature`, `fix` and `test` branch prefixes like `feature/add-something-to-project`

## Troubleshooting

### Automatic local code checking before commit

Run `npx husky install` to install husky which will check code on pre-commit hook

### Dynamic imports

To import something dynamically file extension have to be provided. See more [here](https://github.com/withastro/astro/issues/3373)

## TODO

- add data and layout improvements to projects
- work on a11y for projects
- fix horizontal lines on ios
- basic e2e tests
- analize if rem is good unit to use for offsets etc
- fix reader mode on homepage
