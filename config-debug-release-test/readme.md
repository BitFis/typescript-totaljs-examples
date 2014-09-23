# How to run it?

## First step - Compile

Install typescript globaly
```
npm install -g typescript 
```

Global installation of tsd to get up to date typescript definitions
``` bash
npm install -g tsd
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


### compile and start server

use following oneliner to compile ts and run server (only possible with grunt and global typescript & tsd installed)
``` bash
npm install && tsd update -os && grunt && node debug.js
```

