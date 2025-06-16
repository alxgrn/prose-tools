import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "ProseTools",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
//    rollupOptions: {
//      external: ["react", "react-dom", "@alxgrn/telefrag-ui"],//"highlight.js"],
//      output: {
//        globals: {
//          "react": "React",
//          "react-dom": "ReactDOM",
//          "@alxgrn/telefrag-ui": "@alxgrn/telefrag-ui",
//          //"highlight.js": "hljs",
//        },
//      },
//    },
  },
});
