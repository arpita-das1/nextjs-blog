# nextjs-blog

A small Next.js app demonstrating static props, dynamic routes, and reusable components.

## Features

- `pages/index.js` renders the homepage and loads static post data using `getStaticProps`.
- `pages/posts/[id].js` is a dynamic route that uses `getStaticPaths` and `getStaticProps` to render post pages for `first-post` and `second-post`.
- `lib/staticPost.js` provides shared data and route metadata for the homepage and dynamic posts.
- `lib/FormattedDate.js` formats ISO date strings with `date-fns` and renders a semantic `<time>` element.
- `pages/posts/first-post-sample.js` is a sample static page that shows a simple post layout and uses `next/script`.
- `pages/components/layout.js` wraps page content with a reusable layout component.

## Project structure

- `pages/index.js` - homepage with static post preview and dynamic post links.
- `pages/posts/[id].js` - dynamic post page rendered from the `id` URL segment.
- `pages/posts/first-post-sample.js` - example static route page.
- `pages/components/layout.js` - layout wrapper for page content.
- `lib/staticPost.js` - static data provider with `getStaticData`, `getAllPostIds`, and `getPostData`.
- `lib/FormattedDate.js` - date formatting component using `date-fns`.
- `styles/` - CSS modules and global styles for the app.

## Data flow

- `pages/index.js` calls `getStaticProps` to load `allPostsData` and `postIds` from `lib/staticPost.js`.
- The homepage renders a static post preview and a list of dynamic post links using `postIds`.
- `pages/posts/[id].js` uses `getStaticPaths` to declare available post routes, and `getStaticProps` to fetch post content by `id`.
- `lib/FormattedDate.js` parses and formats the `dateString` prop, while keeping `dateTime` machine-readable.

## Running the app

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx next dev
```

Build for production:

```bash
npx next build
```

Start the production server:

```bash
npm next start
```

## Notes

- This repo uses `next`, `react`, `react-dom`, and `date-fns`.
- Node.js `>=18` is required according to `package.json`.
- Dynamic routes are defined by the `pages/posts/[id].js` file and supported by `getStaticPaths`.
