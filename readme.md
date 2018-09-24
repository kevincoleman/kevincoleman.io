# kevincoleman.io

The source for [kevincoleman.io](https://kevincoleman.io).

Build process has two steps: building `sass` into `css`, and copying static files from `src` into `public`. `npm run watch` will watch the `src` directory for changes and trigger automatic build. `npm run deploy` deploys to the `gh-pages` branch, which is live at [kevincoleman.io](https://kevincoleman.io)
