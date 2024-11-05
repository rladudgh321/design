import esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json' };

const dev = process.argv.includes('--dev');
const watch = process.argv.includes('--watch');
const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
})

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: !dev,
  sourcemap: dev,
  outdir: "dist",
  target: "es2019",
  watch,
  external
}

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      ".js": ".cjs"
    }
  })
]).catch((e) => {
  console.error('esbuild error: ', e);
  process.exit(1);
})