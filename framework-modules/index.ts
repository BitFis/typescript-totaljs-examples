///<reference path="typings/tsd.d.ts" />
// ===================================================
// IMPORTANT: only for development
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

// defintion needed for typescript
global.TotalJS = { Controller: {} };

//import tst = require('./modules/feedback');

//tst.greeting("IT WORKS");
require('total.js').http('debug');