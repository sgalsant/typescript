let countLine = 0;

let canvas;
let context2d;

let scriptEjercicio = null; // fichero javascript a ejecutar al pulsar los botones "execute" y "play"
let fnExecute = null; // funcion a ejecutar al pulsar el botón "execute"
let fnPlay = null;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('run').addEventListener('click', doRun);
  document.getElementById('play').addEventListener('click', doPlay);

  let value = sessionStorage.getItem('input');
  if (value !== null) {
    document.getElementById('input').value = value;
  }

  value = sessionStorage.getItem('output');
  if (value !== null) {
    document.getElementById('output').value = value;
  }

  canvas = document.getElementById('canvas');
  context2d = canvas.getContext('2d');

  let params = (new URL(document.location)).searchParams;
  scriptEjercicio = params.get("script");
  if (scriptEjercicio == null) {
    scriptEjercicio = "ejercicio.js"
  }
  scriptEjercicio = "../src/" + scriptEjercicio;
  let script = document.createElement("script");
  script.src = scriptEjercicio;
  script.async = true;
  document.head.appendChild(script);

  fnExecute = params.get("execute");
  if (fnExecute == null) {
    fnExecute = "execute";
  }

  fnPlay = params.get("play");
  if (fnPlay == null) {
    fnPlay = "play";
  }

  document.getElementById("helpExecute").innerHTML = `Se ejecutará la función "${fnExecute}" del fichero "${scriptEjercicio}"`;
  document.getElementById("helpPlay").innerHTML = `Se ejecutará la función "${fnPlay}" del fichero "${scriptEjercicio}"`;
});

function readLine() {
  const input = document.getElementById('input');
  const lines = input.value.split('\n');
  if ((countLine > lines.length - 1) ||
   ((countLine == lines.length - 1) && (lines[countLine].length == 0))) {
    return null;
  } 

  return lines[countLine++];
}

function write(text) {
  const output = document.getElementById('output');
  output.value += text;
}

function writeLine(line) {
  const output = document.getElementById('output');
  if (output.value.length > 0) {
    output.value += `\n${line}`;
  } else {
    output.value = line;
  }
}

function reset() {
  countLine = 0;
  const output = document.getElementById('output');
  output.value = '';
}

function doPlay() {
  if (!resizedCanvas) {
    resizeCanvas(canvas);
  }

  context2d.clearRect(0, 0, canvas.width, canvas.height);

  const checkbox = document.getElementById('grid');
  if (checkbox != null && checkbox.checked) {
    drawGridLine(context2d, 20);
  }

  if (globalThis[fnPlay]()) {
    requestAnimationFrame(doPlay);
  }
}

function doRun() {
  // execute();
  countLine = 0;
  globalThis[fnExecute]();
}

window.addEventListener('resize', (even) => {
  resizeCanvas(canvas);
});

let resizedCanvas = false;
function resizeCanvas(canvas) {
  // canvas.height = canvas.width *
  // (canvas.clientHeight / canvas.clientWidth);
  canvas.height = canvas.clientHeight;
  canvas.width = canvas.clientWidth;
  resizedCanvas = true;
}

function drawGridLine(context, width) {
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  for (let i = 1; i < context.canvas.width / width; i++) {
    for (let j = 1; j < context.canvas.height / width; j++) {
      context.fillRect(i * width, j * width, 2, 2);
    }
  }
}

window.onbeforeunload = function () {
  sessionStorage.setItem('input', document.getElementById('input').value);
  sessionStorage.setItem('ouput', document.getElementById('output').value);
};
