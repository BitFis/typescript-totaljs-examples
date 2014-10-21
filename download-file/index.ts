///<reference path="./typings/tsd.d.ts" />

// IMPORTANT: only for development
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

// predefine classes, else errors will occure
global.TotalJS = { Controller: {} };

require('total.js').http('debug');