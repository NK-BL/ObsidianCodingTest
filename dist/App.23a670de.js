// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ZZze":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
var products = exports.products = [{
  id: 1,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "badgeIcon.png",
    text: "100% organic"
  }, {
    icon: "badgeIcon.png",
    text: "100% organic"
  }, {
    icon: "badgeIcon.png",
    text: "100% organic"
  }, {
    icon: "badgeIcon.png",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 2,
  title: "Hand pomade / pommade mains",
  subtitle: "Nuturishment for your hands",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 159,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "handPomade.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 3,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 4,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 5,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 6,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}, {
  id: 7,
  title: "Restorative hair mask",
  subtitle: "Nuturishment in a bottle",
  description: "Here is description of product",
  badges: [{
    icon: "",
    text: "100% organic"
  }],
  price: 38,
  detailedDescription: [{
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }, {
    title: "Ingredients",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut."
  }],
  imageSrc: "product1.png",
  breadcrumbs: "All products / Haircare / Restorative mask"
}];
},{}],"fFJQ":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};
},{}],"Fu7d":[function(require,module,exports) {
var process = require("process");
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"fFJQ"}],"aeIX":[function(require,module,exports) {
"use strict";

var _Products = require("./Products.js");
var path = require("path");
var scrollPosition = 0;
var productQuantity = 1;
var cardProductsQuantity = 0;
function HandleCarouselControlNextClick() {
  var carouselWidth = document.getElementById("carousel-inner").scrollWidth;
  var cardWidth = document.getElementsByClassName("carousel-item")[0].offsetWidth;
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    //check if you can go any further
    scrollPosition += cardWidth; //update scroll position
    document.getElementById("carousel-inner").scrollBy({
      left: scrollPosition,
      top: 0,
      behavior: 'smooth'
    });
  }
}
function HandleCarouselControlPreviousClick() {
  var cardWidth = document.getElementsByClassName("carousel-item")[0].offsetWidth;
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    document.getElementById("carousel-inner").scrollBy({
      left: 0 - scrollPosition,
      top: 0,
      behavior: 'smooth'
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  LoadMenuItems();
  LoadFirstProduct();
});
var LoadMenuItems = function LoadMenuItems() {
  var menuHolder = document.getElementById("menu-items");
  var item1 = document.createElement("li");
  var link1 = document.createElement("a");
  link1.textContent = "Shop";
  link1.href = "#";
  item1.appendChild(link1);
  menuHolder.appendChild(item1);
  var item2 = document.createElement("li");
  var link2 = document.createElement("a");
  link2.textContent = "Science";
  link2.href = "#";
  item2.appendChild(link2);
  menuHolder.appendChild(item2);
  var item3 = document.createElement("li");
  var link3 = document.createElement("a");
  link3.textContent = "Press";
  link3.href = "#";
  item3.appendChild(link3);
  menuHolder.appendChild(item3);
  var item4 = document.createElement("li");
  var link4 = document.createElement("a");
  link4.textContent = "Blogs";
  link4.href = "#";
  item4.appendChild(link4);
  menuHolder.appendChild(item4);
  var item5 = document.createElement("li");
  var link5 = document.createElement("a");
  link5.textContent = "Tutorial";
  link5.href = "#";
  item5.appendChild(link5);
  menuHolder.appendChild(item5);
};
var LoadFirstProduct = function LoadFirstProduct() {
  LoadYouMayAlsoLike();
  var firstProduct = _Products.products.find(function (x) {
    return x.id === 1;
  });
  var contentDiv = document.getElementById("content-div");
  fetch(path.resolve("./src", "_productPartial.html")).then(function (response) {
    return response.text();
  }).then(function (html) {
    var result = document.createElement("div");
    result.className = "product-holder";
    result.innerHTML = html;
    var productImage = result.querySelector('.product-image');
    productImage.src = GetImagePath(firstProduct.imageSrc);

    // let productInfoDiv = result.querySelector('.product-info-div');
    var productBreadcrumbs = result.querySelector('.product-breadcrumbs');
    productBreadcrumbs.innerText = firstProduct.breadcrumbs;
    var productTitle = result.querySelector(".product-title");
    productTitle.innerText = firstProduct.title;
    var productSubtitle = result.querySelector(".product-subtitle");
    productSubtitle.innerText = firstProduct.subtitle;
    var productDescription = result.querySelector(".product-description");
    productDescription.innerText = firstProduct.description;
    var productBadges = result.querySelector(".product-badges");
    firstProduct.badges.forEach(function (item) {
      var badgeDiv = "<div class='badge-div'><img class='badge-image' src='" + GetImagePath(item.icon) + "' />" + item.text + "</div>";
      productBadges.innerHTML += badgeDiv;
    });
    var buyOnceLabel = result.querySelector(".buy-once-label");
    buyOnceLabel.innerText = "Buy once | $" + firstProduct.price;
    var subscribeLabel = result.querySelector(".subscribe-label");
    subscribeLabel.innerText = "Subscribe (save 20%) | $" + Math.round(firstProduct.price * 0.8);
    var decreaseQuantityButton = result.querySelector("#decreaseQuantity");
    var increaseQuantityButton = result.querySelector("#increaseQuantity");
    decreaseQuantityButton.onclick = function () {
      if (productQuantity > 1) {
        var quantitiyValueDiv = result.querySelector("#quantity-value");
        quantitiyValueDiv.innerText = --productQuantity;
      }
    };
    increaseQuantityButton.onclick = function () {
      var quantitiyValueDiv = result.querySelector("#quantity-value");
      quantitiyValueDiv.innerText = ++productQuantity;
    };
    var addToCardButton = result.querySelector("#add-to-cart-button");
    addToCardButton.addEventListener("click", function (event) {
      var cart = document.querySelector("#bag-menu-icon");
      var btn = event.target;

      // Create the flying element
      var flyingElement = document.createElement("div");
      flyingElement.className = "cart-animation";
      flyingElement.innerText = "+1";
      document.body.appendChild(flyingElement);

      // Get button position
      var btnRect = btn.getBoundingClientRect();
      var cartRect = cart.getBoundingClientRect();

      // Set initial position near the button
      flyingElement.style.left = "".concat(btnRect.left + btnRect.width / 2, "px");
      flyingElement.style.top = "".concat(btnRect.top, "px");
      flyingElement.style.display = "block";

      // Trigger animation
      flyingElement.animate([{
        transform: "scale(1)",
        left: "".concat(btnRect.left + btnRect.width / 2, "px"),
        top: "".concat(btnRect.top, "px")
      }, {
        transform: "translate(50px, -50px) scale(1.2)",
        opacity: 0.8
      }, {
        transform: "translate(100px, -100px) scale(0.8)",
        opacity: 0.5
      }, {
        transform: "translate(".concat(cartRect.left - btnRect.left, "px, ").concat(cartRect.top - btnRect.top, "px) scale(0.5)"),
        opacity: 0
      }], {
        duration: 1200,
        easing: "ease-in-out",
        fill: "forwards"
      });

      // Remove element after animation
      setTimeout(function () {
        flyingElement.remove();

        // Update cart count
        var badge = document.querySelector("#cart-products-quantity");
        badge.innerText = ++cardProductsQuantity;
      }, 1200);
    });
    var productDetailedDescriptionDiv = result.querySelector('.product-detailed-description-div');
    firstProduct.detailedDescription.forEach(function (item) {
      var detailDescriptionDiv = document.createElement("div");
      var detailDescriptionTitleDiv = document.createElement("div");
      detailDescriptionTitleDiv.className = "detail-description-title-div";
      var plusIconButton = document.createElement("button");
      plusIconButton.className = "expand-detailed-description-icon";
      plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/></svg>";
      var titleSpan = document.createElement("span");
      titleSpan.textContent = item.title;
      detailDescriptionTitleDiv.appendChild(titleSpan);
      detailDescriptionTitleDiv.appendChild(plusIconButton);
      var detailDescriptionAdditionalDiv = document.createElement("div");
      detailDescriptionAdditionalDiv.className = "detail-description-additional-div";
      detailDescriptionAdditionalDiv.textContent = item.description;
      detailDescriptionAdditionalDiv.hidden = true;
      detailDescriptionDiv.appendChild(detailDescriptionTitleDiv);
      detailDescriptionDiv.appendChild(detailDescriptionAdditionalDiv);
      productDetailedDescriptionDiv.appendChild(detailDescriptionDiv);
      plusIconButton.onclick = function () {
        if (detailDescriptionAdditionalDiv.hidden) {
          detailDescriptionAdditionalDiv.hidden = false;
          plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-dash' viewBox='0 0 16 16'> <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/></svg>";
        } else {
          detailDescriptionAdditionalDiv.hidden = true;
          plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/></svg>";
        }
      };
    });
    contentDiv.appendChild(result);
  }).catch(function (error) {
    return console.error('Error loading the partial file:', error);
  });
};
var LoadYouMayAlsoLike = function LoadYouMayAlsoLike() {
  var contentDiv = document.getElementById("content-div");
  fetch(path.resolve("./src", "_youMayAlsoLikePartial.html")).then(function (response) {
    return response.text();
  }).then(function (html) {
    var result = document.createElement("div");
    result.innerHTML = html;
    var carouselInner = result.querySelector('.carousel-inner');
    _Products.products.forEach(function (item, index) {
      var itemDiv = document.createElement("div");
      itemDiv.className = index === 0 ? "carousel-item active" : "carousel-item";
      var card = "<div class='card'><img class='d-block card-image' src='";
      card += GetImagePath(item.imageSrc);
      card += "'><div class='card-body'><h5 class='card-title'>";
      card += item.title;
      card += "</h5><p class='card-text'>";
      card += item.subtitle;
      card += "</p>";
      card += "<br />" + item.price + " $";
      card += "</div></div>";
      itemDiv.innerHTML = card;
      carouselInner.appendChild(itemDiv);
    });
    contentDiv.appendChild(result);
    var prevButton = result.querySelector("#carousel-control-prev");
    prevButton.addEventListener("click", HandleCarouselControlPreviousClick);
    var nextButton = result.querySelector("#carousel-control-next");
    nextButton.addEventListener("click", HandleCarouselControlNextClick);
  }).catch(function (error) {
    return console.error('Error loading the partial carousel file:', error);
  });
};
var GetImagePath = function GetImagePath(imageFileName) {
  return path.resolve("./src", "img", imageFileName);
};
},{"./Products.js":"ZZze","path":"Fu7d"}]},{},["aeIX"], null)