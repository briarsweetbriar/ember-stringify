import { module, test } from 'qunit';
import stringify from 'dummy/ember-stringify';

module('Unit | stringify');

test('stringify converts files in the defined path to strings', function(assert) {
  assert.equal(stringify['hello-world.md'], 'Hi, how are you?\n', 'can convert md');
  assert.equal(stringify['folder']['nested.md'], 'I am nested.\n', 'maintains file hierarchy');
});
