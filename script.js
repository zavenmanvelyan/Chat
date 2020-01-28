var socket = io();
function mouseDragged(evt) {
    var arr = [evt.pageX,evt.pageY];
    socket.emit("drawed ellipse",arr)
}
function setup(){
    frameRate(5);
    createCanvas(600, 600);
    background("#acacac");
    document.body.onmousedown = mouseDragged;
    socket.on("display ellipse",function(val){
        fill("blue");
        ellipse(val[0], val[1], 20, 20);
    })
}

window.onload = setup;
