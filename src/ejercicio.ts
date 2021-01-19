console.log('cargado fichero src/consola.js');

export function execute() {
  let line = readLine();
  writeLine(line);

}


// play
let x = 50;
let y = 50;

export function play() {
  x += 1;
  y += 2;

  context2d.beginPath();
  context2d.arc(x, y, 50, 0, 2 * Math.PI);
  context2d.stroke();
  return true; // si retorna true se llamará repetidamente
}

