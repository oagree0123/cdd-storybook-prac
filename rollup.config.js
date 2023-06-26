import babel from "@rollup/plugin-babel";
import pkg from './package.json' assert { type: 'json' }

export default {
	input: 'src/index.js',
	output: [
    {
      file: pkg.exports['.'].import,
      format: 'esm'
    },
    {
      file: pkg.exports['.'].require,
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
  external: [
    "react",
    "react-dom",
    "styled-components"
  ]
};