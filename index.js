/*jshint node: true */
'use strict';

var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var flatiron = require('broccoli-flatiron');

module.exports = {
  name: 'ember-stringify',

  stringifyPath: function() {
    return this.app.options.stringifyPath || 'stringify';
  },

  treeForApp: function(tree) {
    var files = flatiron(this.stringifyPath(), {
      outputFile: 'ember-stringify.js'
    });

    return mergeTrees([tree, files]);
  }
};
