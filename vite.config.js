import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment:
// - If your repo is 'username/repo-name', set base to '/repo-name/'
// - If it's a user/organization page (username.github.io), set base to '/'
// - You can also use environment variable: VITE_BASE_PATH
//   Example: VITE_BASE_PATH=/my-repo/ npm run build

  // Default to repository name (update this to match your GitHub repo name)


export default defineConfig({
  plugins: [react()],
  base: 'Birthday_proj-1',
})
