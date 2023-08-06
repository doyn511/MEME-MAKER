const modeBtn = document.getElementById("mode-btn")
const colorOptions = Array.from(document.getElementsByClassName("color-option")); //HTML Collection으로 넘어오는 정보를 Array로 생성
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용하는 브러쉬
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event){
  if(isPainting){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
  isPainting = true;
}

function cancelPainting(){
  ctx.beginPath();
  isPainting = false;
}

function onLineWidthChange(event){
  ctx.lineWidth = event.target.value;
}

function onColorChange(event){
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick(){
  if(isFilling){
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else{
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick(){
  if(isFilling){
    ctx.fillRect(0, 0, 800, 800);
  }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);