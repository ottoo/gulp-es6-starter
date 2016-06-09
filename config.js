module.exports = {
  "general": {
    "indexPath": "./src/index.html",
    "entry": "./src/scripts/app.js",
    "buildFileName": "build.js",
    "sassSrc": "./src/styles/scss/**/*.scss"
  },
  "dev": {
    "baseFolder": "./src",
    "images": "./src/images/**/*",
    "styleDest": "./src/styles",
    "buildDest": "./src"
  },
  "prod": {
    "baseFolder": "./dist",
    "images": "./dist/images",
    "styleDest": "./dist/styles",
    "buildDest": "./dist"
  }
};
