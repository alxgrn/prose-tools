import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    dts({
      include: 'lib',
      rollupTypes: true,
      insertTypesEntry: true,
      //copyDtsFiles: true,
      tsconfigPath: "./tsconfig.json",
      staticImport: true,
    }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "ProseTools",
      formats: ["es", "umd"],
      fileName: 'index',
    },
  },
});
