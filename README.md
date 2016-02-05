# ember-stringify

Convert a whole folder into a map of strings. This is great for managing markdown files for your Ember app.

## Installation

`ember install ember-stringify`

## Usage

Imagine you have a file structure like this:

```
.
├── app
├── tests
└── markdown/
    ├── section-one/
    │   ├── one.md
    │   └── two.md
    ├── section-two/
    │   ├── foo.md
    │   └── bar.md
    ├── file1.js
    └── file2.js
```

In your `ember-cli-build.js` file, you could then do:

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    stringifyPath: 'markdown'
  });
});
```

And then in any project file, you could:

```js
import Ember from 'ember';
import strings from 'my-app/ember-stringify';

export default Ember.Controller({
  text: Ember.computed({
    return strings['section-one']['one.md'];
  }),

  stringifiedJavascript: Ember.computed({
    return strings['file1.js'];
  })
});
```
