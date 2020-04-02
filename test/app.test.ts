// https://www.chaijs.com/api/assert/

// Descomentar si estas ejecutando desde comando: npm run test
import assert from 'assert';

// Descomentar si estas ejecutando desde navegador
// const assert = chai.assert;

import {serie} from '../dist/app.js';

describe('mi grupo de test en el fichero app.test.ts', () => {
  it('un test', () => {
    assert.equal(serie([1,2,6,1,6,3,1,9,6]), 393);
  });

  it ('otro', function() {
    assert.equal(serie([49, 92, 24, 76, 24, 78, 34, -3, 11, 90, 82, 66, -5, 85, 45, 20, 60, 20, 29, 85, 18, 6]), -1383675925019135700)
  });
});
