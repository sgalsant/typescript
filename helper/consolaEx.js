let countLine = 0;

let canvas;
let context2d;

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
});

function readLine() {
  const input = document.getElementById('input');
  const lines = input.value.split('\n');
  if (countLine >= lines.length - 1) {
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

  if (play()) {
    requestAnimationFrame(doPlay);
  }
}

function doRun() {
  execute();
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
