# How to run it?

## First step

1. Global installation of tsd to get up to date typescript definitions
``` bash
npm install tsd -g
```
2. Install dependencies
``` bash
npm install
```
3. Load definition files
``` bash
tsd update -os
```

### Using Visual Studio

Open the solution _TotalJSTypescriptExamples.sln_ and compile this project

### Using Grunt

1. Install grunt-cli
``` bash
npm install grunt-cli -g
```
2. Run Grunt
``` bash
grunt
```

## Second step

Run server
``` bash
node index
```

Open browser: <http://127.0.0.1:8000>