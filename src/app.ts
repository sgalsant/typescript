import {hello} from './otro.js';

console.log('ejecutando fichero app.ts');

export function main(): string {
  return hello();
}

export function serie(array: Array<number>):number {
  if (array.length == 0) {
      return 0;
  }
  let result: number;
  result = (array[0]*array[1])+array[2];
  for (let i = 3; i<array.length-1;i+=2) {
    result = result *array[i]+array[i+1];
  }
  return result;

}