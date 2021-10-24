canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color= "black";
widthOfLine= 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    widthOfLine=document.getElementById("widthOfLine").value;
    mouseEvent= "mouseDown";
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent= "mouseUp";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent= "mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= widthOfLine;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}