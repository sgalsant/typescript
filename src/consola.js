console.log('cargado fichero src/consola.js');

function execute() {
  writeLine('hola mundoooo!!');
  const text = readLine();
  writeLine(text);
}

let x = 0;
let y = 0;

function play() {
  x += 1;
  y += 2;

  context2d.beginPath();
  context2d.arc(x, y, 50, 0, 2 * Math.PI);
  context2d.stroke();
}
