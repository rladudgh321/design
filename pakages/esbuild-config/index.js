const { build } = require('esbuild');

const run = ({
  entryPoints = ['src/index.ts'],
  pkg,
  config = {},
}) => {
  const dev = process.argv.includes('--dev');
  const watch = process.argv.includes('--watch');
  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  })

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify: !dev,
    sourcemap: dev,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    ...config,
  }

  Promise.all([
    build({
      ...baseConfig,
      format: 'esm',
    }),
    build({
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
}

module.exports = run;