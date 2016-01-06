# gulp-es6-starter

ES6 starter kit for personal projects. Using Browserify with Watchify and BrowserSync for development. Babelify handles the ES6 -> ES5 conversion

### To install dependencies:

```
npm install
```

### Editing paths:

You can edit the input and output files and folders through the provided config.js file.


### To run gulp in development mode and watch for changes via browsersync, use:

```
gulp -env=dev watch
```


### To run gulp in production mode and build minified javascripts, optimize images and compile scss:

```
gulp -env=prod build
```
