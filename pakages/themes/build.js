import run from '@kyh/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});

