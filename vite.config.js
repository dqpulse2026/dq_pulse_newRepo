import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/dq_pulse_newRepo/',
  plugins: [react()],
});