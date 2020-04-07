// import {suma} from './otro.js';
export function ejercicio1(d: number) {
  let result: number[][] = Array.from({ length: d }, (_, i) => new Array(d).fill(10)); 

  // console.table(result);
  return result;
}

export function ejercicio2(d: number): number[][] {
  let result: number[][]= Array.from({length:d}, 
    (_, i) => Array.from({length:d}, 
      (_, j)=>i*d+j)); 
  
//   console.table(result);
  return result;
}

export function ejercicio3(d: number): number[][] {
  let result: number[][] = Array.from({ length: d }, (_, i) =>
      Array.from({ length: d }, (_, j) => i==j?1:0)
    ); 
  return result;
}

export function ejercicio4(matriz: number[][]): number[] {
  console.table(matriz);
  let result: number[] = matriz.map(fila => fila.reduce((suma: number, valor: number)=>suma+valor ));

  return result;
}

export function ejercicio5(matriz: number[][]): number[] {
  let result: number[] = new Array(matriz[0].length).fill(0);
  for (let i = 0; i < matriz[0].length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      result[i] += matriz[j][i];
    }
  }

  return result;
}

export function ejercicio6(matriz: number[][]): number {
  let result: number = 0;
  for (let fila of matriz) {
    for (let valor of fila) {
      result += valor;
    }
  }

  return result;
}

export function ejercicio7(matriz: number[][][]): number {
  let result: number = 0;
  for (let fila of matriz) {
    for (let columna of fila) {
      for (let valor of columna)
        result += valor;
    }
  }

  return result;
}

export function ejercicio8(matrizA: number[][], matrizB: number[][]): number[][] {
  let result: number[][] = new Array<number[]>(matrizA.length);
  for (let i = 0; i < matrizA.length; i++) {
    result[i] = new Array<number>(matrizA[i].length);
    for (let j = 0; j < matrizA[i].length; j++) {
      result[i][j] = matrizA[i][j] + matrizB[i][j];
    }
  }

  return result;
}





