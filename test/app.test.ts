// https://www.chaijs.com/api/assert/

import {suma} from '../dist/otro.js';

const assert = chai.assert;

describe('mi grupo de test en el fichero app.test.ts', () => {
  it('un testo', () => {
    assert.equal(suma(5, 5), 10);
  });
});
