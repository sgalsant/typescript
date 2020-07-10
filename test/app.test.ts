// https://www.chaijs.com/api/assert/

import * as app from '../src/app.js';

const assert = chai.assert;

describe('tests en test/app.test.ts', () => {
  it('ok', () => {
    assert.isOk(true, 'prueba de funcionamiento de test');
  });

  it('suma', () => {
    assert.equal(app.sumar(3, 2), 5);
  });
});
