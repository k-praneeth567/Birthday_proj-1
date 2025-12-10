# Janaki's Birthday Quest

A beautiful interactive birthday quest game built with React and Vite.

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📦 Deployment to GitHub Pages

### Option 1: Manual Deployment

1. **Update the base path** in `vite.config.js`:
   - If your repository is `username/repo-name`, set `base` to `/repo-name/`
   - If it's a user/organization page (`username.github.io`), set `base` to `/`

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy the `dist` folder**:
   - Go to your repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose the `main` (or `master`) branch
   - Select the `/dist` folder
   - Click Save

### Option 2: Using Environment Variable

You can also set the base path using an environment variable:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

### Option 3: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 📝 Important Notes

- Make sure to update the `base` path in `vite.config.js` to match your repository name
- Audio files (`bg-music.mp3` and `click.mp3`) should be placed in `public/audio/`
- The project uses relative paths for assets, so it will work correctly when hosted on GitHub Pages

## 🎮 Features

- Interactive puzzle levels
- Progress tracking
- Secret paths and hidden endings
- Beautiful animations and transitions
- Background music and sound effects

## 🛠️ Tech Stack

- React 18
- Vite
- Framer Motion
- Tailwind CSS

