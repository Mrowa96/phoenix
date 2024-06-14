# phoenix

## Development

### Locally

1. Node.js + npm. Versions are defined in `./package.json`
2. Copy `.env.example` into `.env.local` and if needed replace/fill values

### Docker

1. Docker on ARM or AMD64
2. `docker build --build-arg SITE=http://localhost:4321 --build-arg RUNTIME_ENV=production -t phoenix .`
3. `docker run -p 127.0.0.1:4321:4321/tcp -d phoenix`

`RUNTIME_ENV` can accept two values: `production` and `stage`. Difference is that `stage` have enabled basic auth.

## Release

1. `npm version major/minor/patch`
2. `git push --follow-tags`

## Troubleshooting

### Automatic local code checking before commit

Run `npx husky install` to install husky which will check code on pre-commit hook

### Dynamic imports

To import something dynamically file extension have to be provided. See more [here](https://github.com/withastro/astro/issues/3373)
