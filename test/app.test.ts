
/*
import * as App from '../dist/app.js';



describe ('testing sumjjj', function() {
    it('suma de numeros positivos', function(){
        chai.assert.equal(App.sum(3, 2), 5);
    });
   

    it ('suma de negativos', function() {
        chai.assert.equal(App.sum(-3, 2), -1);
    });

    it ('suma con log', function() {
        chai.assert.equal(App.sumLog(2, 2), "resultado 4");
    })
})
*/
//https://www.chaijs.com/api/assert/

describe ("mi grupo de test en el fichero app.test.ts", function() {
    it("un test", function() {
        chai.assert(8 == 8, "Genial 8 == 8")
    })
})