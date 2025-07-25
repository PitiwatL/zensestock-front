import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADD THIS LINE FOR GITHUB PAGES DEPLOYMENT
  // Replace 'your-repository-name' with the actual name of your GitHub repository.
  // For example, if your repository is named 'zensenstock-front', it would be '/zensenstock-front/'
  base: '/zensestock-front/', 
})