import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment:
// - If your repo is 'username/repo-name', set base to '/repo-name/'
// - If it's a user/organization page (username.github.io), set base to '/'
// - You can also use environment variable: VITE_BASE_PATH
//   Example: VITE_BASE_PATH=/my-repo/ npm run build
const getBasePath = () => {
  // Check for environment variable first (Node.js process.env)
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  // Default to repository name (update this to match your GitHub repo name)
  return ' /janaki-birthday-quest-transitions-goldcard/'
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
})
