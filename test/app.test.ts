//https://www.chaijs.com/api/assert/

//Descomentar si estas ejecutando desde comando: npm run test
import assert from 'assert';

//Descomentar si estas ejecutando desde navegador
//const assert = chai.assert;

import {main} from '../dist/app.js';

describe ("mi grupo de test en el fichero app.test.ts", function() {
    it("un test", function() {
        assert.equal(main(), "hello");
    })
})