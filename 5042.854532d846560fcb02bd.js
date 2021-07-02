(self.webpackChunk=self.webpackChunk||[]).push([[5042],{5042:function(t,a,s){"use strict";s.r(a),a.default='<p>webpack is not the only module bundler out there. If you are choosing between using webpack or any of the bundlers below, here is a feature-by-feature comparison on how webpack fares against the current competition.</p> <table> <thead> <tr> <th>Feature</th> <th>webpack/webpack</th> <th>jrburke/requirejs</th> <th>substack/node-browserify</th> <th>jspm/jspm-cli</th> <th>rollup/rollup</th> <th>brunch/brunch</th> </tr> </thead> <tbody> <tr> <td data-th="Feature"><span>Additional chunks are loaded on demand</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span><strong>yes</strong></span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span><a href="https://github.com/systemjs/systemjs/blob/master/docs/system-api.md#systemimportmodulename--normalizedparentname---promisemodule">System.import</a></span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>AMD <code>define</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span><strong>yes</strong></span></td> <td data-th="substack/node-browserify"><span><a href="https://github.com/jaredhanson/deamdify">deamdify</a></span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/piuccio/rollup-plugin-amd">rollup-plugin-amd</a></span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>AMD <code>require</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span><strong>yes</strong></span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>AMD <code>require</code> loads on demand</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>with manual configuration</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>CommonJS <code>exports</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>only wrapping in <code>define</code></span></td> <td data-th="substack/node-browserify"><span><strong>yes</strong></span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/rollup/rollup-plugin-commonjs">commonjs-plugin</a></span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>CommonJS <code>require</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>only wrapping in <code>define</code></span></td> <td data-th="substack/node-browserify"><span><strong>yes</strong></span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/rollup/rollup-plugin-commonjs">commonjs-plugin</a></span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>CommonJS <code>require.resolve</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>no</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>no</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Concat in require <code>require("./fi" + "le")</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>no♦</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>no</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Debugging support</span></td> <td data-th="webpack/webpack"><span><strong>SourceUrl, SourceMaps</strong></span></td> <td data-th="jrburke/requirejs"><span>not required</span></td> <td data-th="substack/node-browserify"><span>SourceMaps</span></td> <td data-th="jspm/jspm-cli"><span><strong>SourceUrl, SourceMaps</strong></span></td> <td data-th="rollup/rollup"><span><strong>SourceUrl, SourceMaps</strong></span></td> <td data-th="brunch/brunch"><span>SourceMaps</span></td> </tr> <tr> <td data-th="Feature"><span>Dependencies</span></td> <td data-th="webpack/webpack"><span>19MB / 127 packages</span></td> <td data-th="jrburke/requirejs"><span>11MB / 118 packages</span></td> <td data-th="substack/node-browserify"><span><strong>1.2MB / 1 package</strong></span></td> <td data-th="jspm/jspm-cli"><span>26MB / 131 packages</span></td> <td data-th="rollup/rollup"><span>?MB / 3 packages</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>ES2015 <code>import</code>/<code>export</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong> (webpack 2)</span></td> <td data-th="jrburke/requirejs"><span>no</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span><strong>yes</strong></span></td> <td data-th="rollup/rollup"><span><strong>yes</strong></span></td> <td data-th="brunch/brunch"><span>yes, via <a href="https://github.com/gcollazo/es6-module-transpiler-brunch">es6 module transpiler</a></span></td> </tr> <tr> <td data-th="Feature"><span>Expressions in require (guided) <code>require("./templates/" + template)</code></span></td> <td data-th="webpack/webpack"><span><strong>yes (all files matching included)</strong></span></td> <td data-th="jrburke/requirejs"><span>no♦</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>no</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>Expressions in require (free) <code>require(moduleName)</code></span></td> <td data-th="webpack/webpack"><span>with manual configuration</span></td> <td data-th="jrburke/requirejs"><span>no♦</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>no</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Generate a single bundle</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>yes♦</span></td> <td data-th="substack/node-browserify"><span>yes</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>yes</span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>Indirect require <code>var r = require; r("./file")</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>no♦</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>no</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Load each file separate</span></td> <td data-th="webpack/webpack"><span>no</span></td> <td data-th="jrburke/requirejs"><span>yes</span></td> <td data-th="substack/node-browserify"><span>no</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>Mangle path names</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>no</span></td> <td data-th="substack/node-browserify"><span>partial</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>not required (path names are not included in the bundle)</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>Minimizing</span></td> <td data-th="webpack/webpack"><span><a href="https://github.com/fabiosantoscode/terser">Terser</a></span></td> <td data-th="jrburke/requirejs"><span>uglify, closure compiler</span></td> <td data-th="substack/node-browserify"><span><a href="https://github.com/hughsk/uglifyify">uglifyify</a></span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/TrySound/rollup-plugin-uglify">uglify-plugin</a></span></td> <td data-th="brunch/brunch"><span><a href="https://github.com/brunch/uglify-js-brunch">UglifyJS-brunch</a></span></td> </tr> <tr> <td data-th="Feature"><span>Multi pages build with common bundle</span></td> <td data-th="webpack/webpack"><span>with manual configuration</span></td> <td data-th="jrburke/requirejs"><span><strong>yes</strong></span></td> <td data-th="substack/node-browserify"><span>with manual configuration</span></td> <td data-th="jspm/jspm-cli"><span>with bundle arithmetic</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>no</span></td> </tr> <tr> <td data-th="Feature"><span>Multiple bundles</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>with manual configuration</span></td> <td data-th="substack/node-browserify"><span>with manual configuration</span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>Node.js built-in libs <code>require("path")</code></span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>no</span></td> <td data-th="substack/node-browserify"><span><strong>yes</strong></span></td> <td data-th="jspm/jspm-cli"><span><strong>yes</strong></span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/rollup/rollup-plugin-node-resolve">node-resolve-plugin</a></span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Other Node.js stuff</span></td> <td data-th="webpack/webpack"><span>process, __dir/filename, global</span></td> <td data-th="jrburke/requirejs"><span>-</span></td> <td data-th="substack/node-browserify"><span>process, __dir/filename, global</span></td> <td data-th="jspm/jspm-cli"><span>process, __dir/filename, global for cjs</span></td> <td data-th="rollup/rollup"><span>global (<a href="https://github.com/rollup/rollup-plugin-commonjs">commonjs-plugin</a>)</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Plugins</span></td> <td data-th="webpack/webpack"><span><strong>yes</strong></span></td> <td data-th="jrburke/requirejs"><span>yes</span></td> <td data-th="substack/node-browserify"><span><strong>yes</strong></span></td> <td data-th="jspm/jspm-cli"><span>yes</span></td> <td data-th="rollup/rollup"><span>yes</span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> <tr> <td data-th="Feature"><span>Preprocessing</span></td> <td data-th="webpack/webpack"><span><strong>loaders</strong></span></td> <td data-th="jrburke/requirejs"><span>loaders</span></td> <td data-th="substack/node-browserify"><span>transforms</span></td> <td data-th="jspm/jspm-cli"><span>plugin translate</span></td> <td data-th="rollup/rollup"><span>plugin transforms</span></td> <td data-th="brunch/brunch"><span>compilers, optimizers</span></td> </tr> <tr> <td data-th="Feature"><span>Replacement for browser</span></td> <td data-th="webpack/webpack"><span><code>web_modules</code>, <code>.web.js</code>, package.json field, alias configuration option</span></td> <td data-th="jrburke/requirejs"><span>alias option</span></td> <td data-th="substack/node-browserify"><span>package.json field, alias option</span></td> <td data-th="jspm/jspm-cli"><span>package.json, alias option</span></td> <td data-th="rollup/rollup"><span>no</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Requirable files</span></td> <td data-th="webpack/webpack"><span>file system</span></td> <td data-th="jrburke/requirejs"><span><strong>web</strong></span></td> <td data-th="substack/node-browserify"><span>file system</span></td> <td data-th="jspm/jspm-cli"><span>through plugins</span></td> <td data-th="rollup/rollup"><span>file system or through plugins</span></td> <td data-th="brunch/brunch"><span>file system</span></td> </tr> <tr> <td data-th="Feature"><span>Runtime overhead</span></td> <td data-th="webpack/webpack"><span><strong>243B + 20B per module + 4B per dependency</strong></span></td> <td data-th="jrburke/requirejs"><span>14.7kB + 0B per module + (3B + X) per dependency</span></td> <td data-th="substack/node-browserify"><span>415B + 25B per module + (6B + 2X) per dependency</span></td> <td data-th="jspm/jspm-cli"><span>5.5kB for self-executing bundles, 38kB for full loader and polyfill, 0 plain modules, 293B CJS, 139B ES2015 System.register before gzip</span></td> <td data-th="rollup/rollup"><span><strong>none for ES2015 modules</strong> (other formats may have)</span></td> <td data-th="brunch/brunch"><span>-</span></td> </tr> <tr> <td data-th="Feature"><span>Watch mode</span></td> <td data-th="webpack/webpack"><span>yes</span></td> <td data-th="jrburke/requirejs"><span>not required</span></td> <td data-th="substack/node-browserify"><span><a href="https://github.com/browserify/watchify">watchify</a></span></td> <td data-th="jspm/jspm-cli"><span>not needed in dev</span></td> <td data-th="rollup/rollup"><span><a href="https://github.com/rollup/rollup-watch">rollup-watch</a></span></td> <td data-th="brunch/brunch"><span>yes</span></td> </tr> </tbody> </table> <p>♦ in production mode (opposite in development mode)</p> <p>X is the length of the path string</p> <h2 id="bundling-vs-loading">Bundling vs. Loading<a href="#bundling-vs-loading" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>It\'s important to note some key differences between <em>loading</em> and <em>bundling</em> modules. A tool like <a href="https://github.com/systemjs/systemjs">SystemJS</a>, which can be found under the hood of <a href="https://github.com/jspm/jspm-cli">JSPM</a>, is used to load and transpile modules at runtime in the browser. This differs significantly from webpack, where modules are transpiled (through "loaders") and bundled before hitting the browser.</p> <p>Each method has its advantages and disadvantages. Loading and transpiling modules at runtime can add a lot of overhead for larger sites and applications comprised of many modules. For this reason, SystemJS makes more sense for smaller projects where fewer modules are required. However, this may change a bit as <a href="https://http2.github.io/">HTTP/2</a> will improve the speed at which files can be transferred from server to client. Note that HTTP/2 doesn\'t change anything about <em>transpiling</em> modules, which will always take longer when done client-side.</p> '}}]);