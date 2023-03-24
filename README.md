<!-- markdownlint-disable-next-line -->
<p align="center">
  <h1 align="center">BlockChain Visualizetion</h1>
</p>
</br>

<div align="center">

## 📦 Quick Start

1. Installation: Inside your React project directory, install ShitUI by running either of the following:

```bash
yarn add @sui/core @emotion/react
# or
npm i @sui/core @emotion/react
```

2. Setup: For ShitUI to work correctly, you need to set up the `App` at the root of your application.

Go to the root of your application and do this:

```jsx
import { App } from '@sui/core';

const Main = () => (
  <App>
    <AppComponent /> // ---> Your App Component
  </App>
);
```

3. Using ShitUI components: Once ShitUI is installed you can use any of the components as follows.
   ShitUI uses tree-shaking so the unused modules will not be included in the bundle during the build process and
   each component is exported separately.

```jsx
import { Button } from '@sui/core';

const Component = () => <Button>Click me</Button>;
```

4. ShitUI allows to manually import components if you need. E.g.

```jsx
import Button from '@sui/core/button';

const Component = () => <Button>Click me</Button>;
```

## 🤝 Contribution

Please make sure to read the [Contributing Guide](https://github.com/fogcity/ui/blob/main/contributing.md) before making a pull request and commit with [Commit Guide](https://github.com/fogcity/ui/blob/main/commit-convention.md).

## ❤️ Sponsors

Thank you to all the people who already contributed to us!

## 🔗 License

[MIT](https://opensource.org/licenses/MIT)
