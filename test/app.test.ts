// https://www.chaijs.com/api/assert/

import * as ejercicios from '../dist/app.js';

const assert = chai.assert;

describe('ejercicio 1 - array cuadrado inicializado a 10', () => {
  const dataTests: any[] = [
    {
      args: 2,
      expected: [
        [10, 10],
        [10, 10]
      ]
    },
    {
      args: 4,
      expected: [
        [10, 10, 10, 10],
        [10, 10, 10, 10],
        [10, 10, 10, 10],
        [10, 10, 10, 10]
      ]
    }
  ];

  dataTests.forEach((test) => {
    it(`array ${test.args}x${test.args}`, () => {
      assert.deepEqual(ejercicios.ejercicio1(test.args), test.expected);
    });
  });
});

describe('ejercicio 2 - array cuadrado inicializado con valores crecientes', () => {
  it('array 2x2', () => {
    assert.deepEqual(ejercicios.ejercicio2(2), [
      [0, 1],
      [2, 3],
    ]);
  });

  it('array 4x4', () => {
    assert.deepEqual(ejercicios.ejercicio2(4), [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
    ]);
  });
});

describe('ejercicio 3 - array identidad', () => {
  const dataTests: any[] = [
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

  dataTests.forEach((test) => {
    it(`array ${test.args}x${test.args}`, () => {
      assert.deepEqual(ejercicios.ejercicio3(test.args), test.expected);
    });
  });
});

describe('ejercicio 4 - suma de las filas de una matriz', () => {
  const dataTests: any[] = [
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

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i}`, () => {
      assert.deepEqual(ejercicios.ejercicio4(test.args), test.expected);
    });
  });
});

describe('ejercicio 5 - suma de las columnas de una matriz', () => {
  const dataTests: any[] = [
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

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i}`, () => {
      assert.deepEqual(ejercicios.ejercicio5(test.args), test.expected);
    });
  });
});

describe('ejercicio 6 - suma de toda la matriz', () => {
  const dataTests: any[] = [
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

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i}`, () => {
      assert.deepEqual(ejercicios.ejercicio6(test.args), test.expected);
    });
  });
});

describe('ejercicio 7 - suma de toda la matriz de tres dimensiones', () => {
  const dataTests: any[] = [
    {
      args: [
        [
          [1, 1, 1],
          [2, 2, 2],
          [3, 3, 3],
        ],
        [
          [5, 5, 5],
          [6, 6, 6],
          [7, 7, 7],
        ]
      ],
      expected: 72
    },
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i}`, () => {
      assert.deepEqual(ejercicios.ejercicio7(test.args), test.expected);
    });
  });
});

describe('ejercicio 8 - suma de dos matrices', () => {
  const dataTests: any[] = [
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

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(
        ejercicios.ejercicio8(test.args[0], test.args[1]),
        test.expected
      );
    });
  });
});

describe('ejercicio 9 - multiplicación de dos matrices', () => {
  const dataTests: any[] = [
    {
      args: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ],
        [
          [11, 12, 13],
          [14, 15, 16],
          [17, 18, 19]
        ]
      ],
      expected: [
        [90, 96, 102],
        [216, 231, 246],
        [342, 366, 390]
      ]
    },
    {
      args: [
        [
          [21, 2, 3],
          [4, 25, 6],
          [7, 8, 29]
        ],
        [
          [11, 12, 33],
          [14, 35, 16],
          [37, 18, 19]
        ]
      ],
      expected: [
        [370, 376, 782],
        [616, 1031, 646],
        [1262, 886, 910]
      ]
    }
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(
        ejercicios.ejercicio9(test.args[0], test.args[1]),
        test.expected
      );
    });
  });
});

describe('ejercicio 10 - transponer una matriz', () => {
  const dataTests: any[] = [
    {
      args: [
          [1, 1, 1],
          [2, 2, 2],
          [3, 3, 3]
      ],
      expected: [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
      ]
    },
    {
      args: [
          [11, 12, 13],
          [14, 15, 16]
      ],
      expected: [
        [11, 14],
        [12, 15],
        [13, 16]
      ]
    }
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(
        ejercicios.ejercicio10(test.args),
        test.expected
      );
    });
  });
});

describe('ejercicio 11 - invertir los elementos de cada fila', () => {
  const dataTests: any[] = [
    {
      args: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      expected: [
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7]
      ]
    },
    {
      args: [
        [11, 12, 13, 14],
        [1, 2, 3, 4]
      ],
      expected: [
        [14, 13, 12, 11],
        [4, 3, 2, 1]
      ]
    }
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(ejercicios.ejercicio11(test.args), test.expected);
    });
  });
});

describe('ejercicio 12 - girar matriz a la derecha', () => {
  const dataTests: any[] = [
    {
      args: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      expected: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
    },
    {
      args: [
        [11, 12, 13, 14],
        [1, 2, 3, 4]
      ],
      expected: [
        [1, 11],
        [2, 12],
        [3, 13],
        [4, 14]
      ]
    }
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(ejercicios.ejercicio12(test.args), test.expected);
    });
  });
});


describe('ejercicio 13 - decodificar mensaje', () => {
  const dataTests: any[] = [
    {
      args: [
        [
          [' ', 'd', '', 'y', 'p', 'o'],
          ['o', 'r', ' ', '', 'r', ''],
          ['', '', 'o', '', 'g', 's'],
          ['', '', 'o', '', 'y', 'r'],
          ['a', ' ', 'm', '', '', ''],
          ['u', '', '', 'a', 'n', '']
        ],
        [
          [0, 0, 0, 1, 0, 0],
          [1, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1],
          [0, 0, 1, 0, 1, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 0, 0, 0, 1, 0]
        ]
      ],
      expected: 'yo soy un programador'
    },
    {
      args: [
        [
          ['c', 'a', 'd', 't', 'a', 'r'],
          ['o', 's', 'd', 'o', 'e', 's'],
          ['',  'm', 'a', 'o', ',', 'o'],
          ['s', '',  's', '',  ' ', ' '],
          ['g', 'e', 'a', ' ', '', 't'],
          ['n', '',  'o', 'n', ' ', '']
        ],
        [
          [0, 0, 0, 1, 0, 0],
          [1, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1],
          [0, 0, 1, 0, 1, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 0, 0, 0, 1, 0]
        ]
      ],
      expected: 'todos en casa, ganaremos todos'
    }
  ];

  dataTests.forEach((test: any, i: number) => {
    it(`data ${i} `, () => {
      assert.deepEqual(ejercicios.ejercicio13(test.args[0], test.args[1]), test.expected);
    });
  });
});
