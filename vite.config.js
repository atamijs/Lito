import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const ver = pkg.version || String(Date.now());

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 用版本号替代 [hash]
        entryFileNames: `[name].v${ver}.js`,
        chunkFileNames: `[name].v${ver}.js`,
        assetFileNames: `[name].v${ver}[extname]`
      }
    }
  }
});