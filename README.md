# phoenix

## Development

### Locally

1. Node.js + npm. Versions are defined in `./package.json`
2. `.env.local` file with predefined values
   ```
   SITE=http://localhost:3000
   ```

### Docker

1. Docker on ARM or AMD64
2. `docker build --build-arg SITE=http://localhost:3000 --build-arg RUNTIME_ENV=production -t phoenix .`
3. `docker run -p 127.0.0.1:3000:3000/tcp -d phoenix`

`RUNTIME_ENV` can accept two values: `production` and `stage`. Difference is that `stage` have enabled basic auth.

### Working with git

Projects use `feature`, `fix` and `test` branch prefixes like `feature/add-something-to-project`

## Release

1. `npm version major/minor/patch`
2. `git push --follow-tags`

## Troubleshooting

### Automatic local code checking before commit

Run `npx husky install` to install husky which will check code on pre-commit hook

### Dynamic imports

To import something dynamically file extension have to be provided. See more [here](https://github.com/withastro/astro/issues/3373)
