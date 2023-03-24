import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createBlockletPlugin } from 'vite-plugin-blocklet';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server:{
      proxy:{
        '/api':{
          target:'https://blockchain.info'
          ,changeOrigin:true,
          rewrite:(path)=>path.replace(/^\/api/,'')
        }
      }
    },
    plugins: [react(), createBlockletPlugin(), nodePolyfills({ protocolImports: true }), svgr()],
  };
});
