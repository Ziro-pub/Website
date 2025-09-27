import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    // Use the plugin with explicit options
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        // ...
      },
      // esbuild options, to transform jsx syntax
      esbuildOptions: {
        // ...
      },
      // A minimatch pattern to include files
      include: "**/*.svg?react",
      // A minimatch pattern to exclude files
      exclude: "",
    }),
  ],
  server: {
    host: true,
    allowedHosts: ['.loca.lt']
  }
})