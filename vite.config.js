import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // **THIS LINE IS CRITICAL:**
  base: '/zensestock-front/', // MAKE SURE IT'S EXACTLY THIS
})

