const canvas = new fabric.Canvas("main-canvas");

document.querySelector('#draw').addEventListener("click", function(){
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width=5;
    canvas.freeDrawingBrush.color="black";
    canvas.isDrawingMode = true;
});

document.querySelector('#postPng').addEventListener("click", function(){
    const dataURL = canvas.toDataURL({
        format: "png"
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "イラスト.png";
    link.click();
});