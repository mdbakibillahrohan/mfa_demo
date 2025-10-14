import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://0.0.0.0:2001", // or just omit this
    port: 2001,
    cors: {
      origin: "*", //
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"], // optional
    },
  },
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) =>
        outputChunk.fileName === "remoteEntry.js",
    }),
    federation({
      name: "warehouse_mfa",
      manifest: true,
      filename: "remoteEntry.js",
      exposes: {
        "./MainRouter": "./src/router/main-router",
        "./App": "./src/App.tsx",
        "./AppCss": "./src/App.css",
      },
      remotes: {
        cloud_host: {
          name: "cloud_host",
          entry: "http://localhost:3000/remoteEntry.js",
          type: "module",
        },
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        "react-router": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "@reduxjs/toolkit": {
          singleton: true,
        },
        axios: {
          singleton: true,
        },
        antd: {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: "chrome89",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
});
