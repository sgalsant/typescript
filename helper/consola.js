var countLine = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('run').addEventListener('click', doRun);
  document.getElementById('play').addEventListener('click', doPlay);
});

function readLine() {
  let input = document.getElementById('input');
  let lines = input.value.split('\n');
  if (countLine >= lines.length - 1) {
    return null;
  }

  return lines[countLine++];
}

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  return x;
}

async function waitReadLine() {
  return f1();
}


function write(text) {
  let output = document.getElementById('output');
  output.value += text;
}

function writeLine(line) {
  let output = document.getElementById('output');
  if (output.value.length > 0) {
    output.value += '\n' + line;
  } else {
    output.value = line;
  }
}

function reset() {
  countLine = 0;
  let output = document.getElementById('output');
  output.value = '';
}




function doPlay() {
  if (!resizedCanvas) {
    resizeCanvas(canvas);
  }

  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let checkbox = document.getElementById('grid');
  if (checkbox != null && checkbox.checked) {
    drawGridLine(context, 20);
  }

  if (play()) {
    requestAnimationFrame(doPlay);
  }
}

function doRun() {
  execute();
}

var canvas = document.getElementById('canvas');
window.addEventListener("resize", function (even) {
  resizeCanvas(canvas);
});


let resizedCanvas = false;
function resizeCanvas(canvas) {
  //canvas.height = canvas.width *
  // (canvas.clientHeight / canvas.clientWidth);
  canvas.height = canvas.clientHeight;
  canvas.width = canvas.clientWidth;
  resizedCanvas = true;
}

function drawGridLine(context, width) {
  /*
    context.strokeStyle = '#F00000';
    context.lineWidth = 1;
    for (var i = 0; i < context.canvas.width / width; i++) {
      context.beginPath();
      context.moveTo(i * width, 0);
      context.lineTo(i * width, context.canvas.height);
      context.stroke();
    }
  
    for (var i = 0; i < context.canvas.height / width; i++) {
      context.beginPath();
      context.moveTo(0, i * width);
      context.lineTo(context.canvas.width, i * width);
      context.stroke();
    }
  */
  context.strokeStyle = 'black';
  context.fillStyle = "black";
  for (var i = 1; i < context.canvas.width / width; i++)
    for (var j = 1; j < context.canvas.height / width; j++) {
      context.fillRect(i * width, j * width, 2, 2);
    }
  /*
           //se dibuja los puntos centrales de otro color
               context.strokeStyle = 'red';
    context.fillStyle = "red";
            for (var i = 1; i < context.canvas.width / width; i++ ) {
                    context.fillRect(i*width, context.canvas.height/2, 4, 4);
            }  
              for (var i = 1; i < context.canvas.height / width; i++ ) {
                    context.fillRect(context.canvas.width/2, i*width, 4, 4);
            } */
}


