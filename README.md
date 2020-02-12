# jekyll-react-poc

This project is a simple proof of concept for using React.js alongside Jekyll.

Component source code is written in TypeScript. Sass modules are used for styling, and Jest is used for unit testing.

## Requirements

- Ruby 2.6
- npm 12.13.1

**Note:** Windows 10 users should run this project using [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

## Install Dependencies

```text
bundle install
```

```text
npm install
```

## Build Components and Serve Static Site

```text
npm run serve
```

This will:

1. Clean the output folders (i.e., `dist` and `src/gen`)
2. Run the UTs (for now they're fake)
3. Transpile .ts/.tsx and .scss files to the `src/gen/assets` folder, and populate the `dist` folder.
4. Serve the site locally; a demo page is accessible from `localhost:4000/sample-collection/sample-article.html`.

## Other Scripts

- Run UTs:

```text
npm run test
```

- Clean all output folders:

```text
npm run clean
```

- Build components and static site for production:

```text
npm run build
```
