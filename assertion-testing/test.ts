///<reference path="typings/tsd.d.ts" />
// ===================================================
// IMPORTANT: only for testing
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

// define TotalJS.Controller
require('total.js').on('init', function (type, name) {
    global.TotalJS = { Controller: {} };
}).http('test');