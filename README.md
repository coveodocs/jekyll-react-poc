# jekyll-react-poc

## Step 1 - Install Dependencies

```text
npm install
```

## Step 2 - Build Components and Serve Static Site

```text
npm run serve
```

This will:

1. Clean the output folders (i.e., `dist` and `src/gen`)
2. Run the UTs (for now they're fake)
3. Transpile .ts/.tsx and .scss files to the `src/gen/assets` folder, and populate the `dist` folder.
4. Serve the site locally; a demo page is accessible from `localhost:4000/sample-collection/sample-article.html`.

