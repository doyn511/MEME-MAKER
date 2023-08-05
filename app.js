const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용하는 브러쉬
canvas.width = 800;
canvas.height = 800;
const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#ff9f1a",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
]

// ctx.beginPath();
// ctx.fill();
// ctx.stroke();
// ctx.moveTo();
// ctx.lineTo();

ctx.lineWidth = 2;
let isPainting = false;

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
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);