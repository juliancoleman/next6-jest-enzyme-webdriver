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

and then:

```bash
brew cask install chromedriver
```

## Run Jest tests

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
