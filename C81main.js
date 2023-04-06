canvas=document.getElementById("canvas");
contexto=canvas.getContext("2d");

var x,y;

if (screen.width < 990) {
    canvas.width= screen.width-70;
    canvas.height= screen.height-300;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", clicke);

function clicke(e){
    cor=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    x=e.touches[0].clientX-canvas.offsetLeft;
    y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mover);
function mover(e){

    mousex=e.touches[0].clientX - canvas.offsetLeft;
    mousey=e.touches[0].clientY - canvas.offsetTop;
        contexto.beginPath();
        contexto.strokeStyle=cor;
        contexto.lineWidth=largura;
        contexto.moveTo(x,y);
        contexto.lineTo(mousex,mousey);
        contexto.stroke();
    
   x=mousex;
   y=mousey
}
function clear(){
    contexto.clearRect(0,0,canvas.width,canvas.height);
}