# Example app with Jest tests inside a NextJS TypeScript app

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-jest-typescript with-jest-typescript-app
# or
yarn create next-app --example with-jest-typescript with-jest-typescript-app
```

### Download manually

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-jest-typescript
cd with-jest-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Run Jest tests

Before running the test suite and after you've run `yarn`
to install all dependencies, you will need to head over to
`node_modules/next/dist/server/build/webpack.js` and
comment out the following at or around line 125:

```ts
if (err) {
  return callback();
} // Default pages have to be transpiled
```

> [Related issue](https://github.com/zeit/next.js/issues/4227)
>
> [Answer](https://github.com/zeit/next.js/issues/4227#issuecomment-386709519)
>
> [Resolution](https://github.com/zeit/next.js/issues/4227#issuecomment-386773316)
>
> _TL;DR:_
>
> ```
> Plugin 0 specified in "/node_modules/next/babel.js"
> provided an invalid property of "default" (While processing preset: ...
> ```
>
> _this project's dependencies are using a
> combination of Babel 6 and 7 (Next uses 7, Jest uses 6)._


This issue may be resolved in the future, but for now, do
this. Once you've commented out the block, go ahead and run
the following:

```bash
npm run test
# or
yarn test
```

## The idea behind the example

This example shows a configuration and several examples for a running Jest tests in a NextJS TypeScript app

Features:
- [ ] Custom Typescript server
- [ ] Use Typescript-React (`tsx`)
- [ ] Use `next-routes`
- [ ] Use `Jest`/`ts-jest` for unit testing
- [ ] Use `Enzyme` for integration testing
- [ ] Use `Chromedriver`/`WebDriverIO` for e2e testing
