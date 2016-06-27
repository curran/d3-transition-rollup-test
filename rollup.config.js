import npm from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  entry: "index-es6.js",
  format: "umd",
  sourceMap: "inline",
  moduleName: "D3TransitionTest",
  plugins: [
    npm({ jsnext: true })
  ],
  dest: "index-build.js"
};
