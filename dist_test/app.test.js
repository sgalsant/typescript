// https://www.chaijs.com/api/assert/
import * as ejercicios from '../dist/app.js';
const assert = chai.assert;
describe('ejercicio 1 - array cuadrado inicializado a 10', () => {
    let dataTests = [
        { args: 2, expected: [[10, 10], [10, 10]] },
        { args: 4, expected: [[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]] }
    ];
    dataTests.forEach(function (test) {
        it(`array ${test.args}x${test.args}`, () => {
            assert.deepEqual(ejercicios.ejercicio1(test.args), test.expected);
        });
    });
});
describe('ejercicio 2 - array cuadrado inicializado con valores crecientes', () => {
    it('array 2x2', () => {
        assert.deepEqual(ejercicios.ejercicio2(2), [[0, 1], [2, 3]]);
    });
    it('array 4x4', () => {
        assert.deepEqual(ejercicios.ejercicio2(4), [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]);
    });
});
describe('ejercicio 3 - array identidad', () => {
    let dataTests = [
        {
            args: 2,
            expected: [
                [1, 0],
                [0, 1]
            ]
        },
        {
            args: 4,
            expected: [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ]
        }
    ];
    dataTests.forEach(function (test) {
        it(`array ${test.args}x${test.args}`, () => {
            assert.deepEqual(ejercicios.ejercicio3(test.args), test.expected);
        });
    });
});
describe('ejercicio 4 - suma de las filas de una matriz', () => {
    let dataTests = [
        {
            args: [
                [1, 2, 3],
                [4, 4, 5]
            ],
            expected: [6, 13]
        },
        {
            args: [
                [1, 10, 100, 1000],
                [0, 1, 2, 3],
                [10, 0, 10, 0],
                [6, 6, 6, 6]
            ],
            expected: [1111, 6, 20, 24]
        }
    ];
    dataTests.forEach(function (test, i) {
        it(`array ${i}`, () => {
            assert.deepEqual(ejercicios.ejercicio4(test.args), test.expected);
        });
    });
});
describe('ejercicio 5 - suma de las columnas de una matriz', () => {
    let dataTests = [
        {
            args: [
                [1, 2, 3],
                [4, 4, 5]
            ],
            expected: [5, 6, 8]
        },
        {
            args: [
                [1, 10, 100, 1000],
                [0, 1, 2, 3],
                [10, 0, 10, 0],
                [6, 6, 6, 6]
            ],
            expected: [17, 17, 118, 1009]
        }
    ];
    dataTests.forEach(function (test, i) {
        it(`array ${i}`, () => {
            assert.deepEqual(ejercicios.ejercicio5(test.args), test.expected);
        });
    });
});
describe('ejercicio 6 - suma de toda la matriz', () => {
    let dataTests = [
        {
            args: [
                [1, 2, 3],
                [4, 4, 5]
            ],
            expected: 19
        },
        {
            args: [
                [1, 10, 100, 1000],
                [0, 1, 2, 3],
                [10, 0, 10, 0],
                [6, 6, 6, 6]
            ],
            expected: 1161
        }
    ];
    dataTests.forEach(function (test, i) {
        it(`array ${i}`, () => {
            assert.deepEqual(ejercicios.ejercicio6(test.args), test.expected);
        });
    });
});
describe('ejercicio 7 - suma de toda la matriz de tres dimensiones', () => {
    let dataTests = [
        {
            args: [
                [[1, 1, 1], [2, 2, 2], [3, 3, 3]],
                [[5, 5, 5], [6, 6, 6], [7, 7, 7]]
            ],
            expected: 72
        },
    ];
    dataTests.forEach(function (test, i) {
        it(`array  ${i}`, () => {
            assert.deepEqual(ejercicios.ejercicio7(test.args), test.expected);
        });
    });
});
describe('ejercicio 8 - suma de dos matrices', () => {
    let dataTests = [
        {
            args: [
                [
                    [1, 1, 1],
                    [2, 2, 2],
                    [3, 3, 3]
                ],
                [
                    [5, 5, 5],
                    [6, 6, 6],
                    [7, 7, 7]
                ]
            ],
            expected: [
                [6, 6, 6],
                [8, 8, 8],
                [10, 10, 10]
            ]
        }
    ];
    dataTests.forEach(function (test, i) {
        it(`array ${i} `, () => {
            assert.deepEqual(ejercicios.ejercicio8(test.args[0], test.args[1]), test.expected);
        });
    });
});
//# sourceMappingURL=app.test.js.map