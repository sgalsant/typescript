console.log('ejecutando fichero app.ts');

/*
  class App {
    function main() {
      console.log("ecutando app.main")
    }
  }

  new App().main();
*/

 
// Se exporta para poder hacer referencia desde los test
export function sumar(a: number, b: number): number {
  if (a < 0) {
    return 0;
  } else {
  return a + b;
}
}

sumar(5,3);
