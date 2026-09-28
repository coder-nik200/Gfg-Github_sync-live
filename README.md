# GFG GitHub Sync Website

Website for the GFG GitHub Sync Chrome extension.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

Push this project to GitHub and import the repository into Vercel. The default Next.js build settings work.

## Update release links

Edit `components/site.tsx`:

```ts
export const REPO_URL = "...";
export const RELEASES_URL = "...";
```

The current website points to the extension repository's Releases page so users can download the latest ZIP.
