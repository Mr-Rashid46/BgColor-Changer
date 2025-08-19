import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change `BgColor-Changer` to your repo name!
export default defineConfig({
  plugins: [react()],
  base: "/BgColor-Changer/"
})
