module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks("grunt-ts");
    
    grunt.initConfig({
        exec: {
            // compile main application
            compileapp: {
                command: "tsc app.ts --module \"commonjs\"",
            },
        },
        ts: {

            // use to override the default options, See: http://gruntjs.com/configuring-tasks#optionsm
            // these are the default options to the typescript compiler for grunt-ts:
            // see `tsc --help` for a list of supported options.
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 (default) | es5]
                module: 'commonjs',                 // target javascript module style. [amd (default) | commonjs]
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
                mapRoot: 'obj/',               // where to locate .map.js files. [(default) '' == generated js location.]
                declaration: false             // generate a declaration .d.ts file for every output js file. [true | false (default)]
                //  htmlModuleTemplate: 'My.Module.<%= filename %>',    // Template for module name for generated ts from html files [(default) '<%= filename %>']
                //  htmlVarTemplate: '<%= ext %>'                       // Template for variable name used in generated ts from html files [(default) '<%= ext %>]
                // Both html templates accept the ext and filename parameters.
            },

            target: {
                src: ["controllers/**/*.ts", "app/**/*.ts", "modules/**/*.ts", "index.ts"],
                html: [],
                reference: 'obj/reference_server.ts',
            //    out: 'index.js',
            },
        },
    });
    
    grunt.registerTask("default", ["ts"]);
};