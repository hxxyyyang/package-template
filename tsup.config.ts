import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: !!options.watch, 
  target: 'node18',
  splitting: false,
  minify: !options.watch
}))
