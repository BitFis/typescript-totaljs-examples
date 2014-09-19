# How to run it?

## First step - Compile

Global installation of tsd to get up to date typescript definitions
``` bash
npm install tsd -g
```

Install dependencies
``` bash
npm install
```

Load definition files
``` bash
tsd update -os
```

### Using Visual Studio

Open the solution _TotalJSTypescriptExamples.sln_ and compile this project

### Using Grunt

Install grunt-cli
``` bash
npm install grunt-cli -g
```

Run Grunt
``` bash
grunt
```

## Second step - Start server

Run server
``` bash
node index
```

Open browser: <http://127.0.0.1:8000>