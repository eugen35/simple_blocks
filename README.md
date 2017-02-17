# Redux DevTools todomvc example

## Running Example

First, clone the project:

```
git clone https://github.com/gaearon/redux-devtools.git
```

Then install the dependencies in the root folder:

```
cd redux-devtools
npm install
```

Install the dependencies in the example folder:

```
cd examples/todomvc
npm install
```

Finally, run the project:

```
npm start
open http://localhost:3000
```

##Hot reload problems

###Webpack does not watch on Windows and WebStorm
seems Webpack watch doesn't work if the file is not saved directly. Please try turning 'Safe write' option ( Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)) off

+ если верхнее не помогает, то к нему можно добавить в файл webpack.config.js среди списка опций следующую:
```
...
watchOptions: {
aggregateTimeout: 300, // Delay the rebuilt after the first change. Value is a time in ms.
//poll: true // bool - enable / disable polling or number - polling delay
poll: 1000
}
...
```

