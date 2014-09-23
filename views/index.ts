///<reference path="typings/tsd.d.ts" />
// ===================================================
// IMPORTANT: only for development
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

// define TotalJS.Controller for controller classes
global.TotalJS = { Controller: {} };

framework = require("total.js")

framework.on('init', function () {
    console.log('init called');
});
console.log('start called');

framework.http("debug");