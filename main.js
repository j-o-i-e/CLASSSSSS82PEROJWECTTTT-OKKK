mouseEvent="";
lastmousex="";
lastmousey="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=2;


canvas.addEventListener("mousedown",mymd);
function mymd(e){
    color=document.getElementById("p_color").value;
    linewidth=document.getElementById("p_width").value;
    mouseEvent="md";
}
canvas.addEventListener("mouseup",mymu);
function mymu(e){
    mouseEvent="mu";
}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouseEvent="ml";
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    cmousex=e.clientX-canvas.offsetLeft;
    cmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="md"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.arc(cmousex,cmousey,20,0,2*Math.PI)
        ctx.stroke()

    }
    lastmousex=cmousex;
    lastmousey=cmousey

}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}