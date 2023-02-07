
const canvas = new fabric.Canvas('canvas',{
    width: 400,
    height: 400,
    backgroundColor: 'white',
    selection: false,
    isDrawingMode: false
});

canvas.renderAll();


let circle;
let line1;
let line2;
function createUnitCircle(){
    circle = new fabric.Circle({
        radius: 150,
        stroke: 'black',
        fill: '',
        strokeWidth: 2,
        left: 200,
        top: 200,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hoverCursor: 'default'
        
    });
    canvas.add(circle);
    // canvas.centerObject(circle);

    line1 = new fabric.Line([200, 0, 200, 400],{
        stroke: 'black',
        selectable: false,
        hoverCursor: 'default'
    });
    canvas.add(line1);
    
    line2 = new fabric.Line([0, 200, 400, 200],{
        stroke: 'black',
        selectable: false,
        hoverCursor: 'default'
    });
    canvas.add(line2);


}
createUnitCircle();


let btnChecker = true;
let deleteChecker = false;

let zeroBtn = document.getElementById('zero');
let poleBtn = document.getElementById('pole');
let trashBtn = document.getElementById('delete');

zeroBtn.setAttribute ("class", "button btn");
zeroBtn.addEventListener('click', () => {
    if (poleBtn.getAttribute("class") == "button btn"){
        poleBtn.setAttribute ("class", "button");  
    }
    if (trashBtn.getAttribute("class") == "button btn"){
        trashBtn.setAttribute ("class", "button");  
    }
    btnChecker = true;  
    deleteChecker = false;
    zeroBtn.setAttribute ("class", "button btn");
    
});

poleBtn.addEventListener('click', () => {
    if (zeroBtn.getAttribute ("class") == "button btn"){
        zeroBtn.setAttribute ("class", "button");
    }
    if (trashBtn.getAttribute("class") == "button btn"){
        trashBtn.setAttribute ("class", "button");  
    }
    btnChecker = false;  
    deleteChecker = false;
    poleBtn.setAttribute ("class", "button btn");
});

trashBtn.addEventListener('click', (event) => {
    if (zeroBtn.getAttribute ("class") == "button btn"){
        zeroBtn.setAttribute ("class", "button");
    }
    if (poleBtn.getAttribute("class") == "button btn"){
        poleBtn.setAttribute ("class", "button");  
    }
    deleteChecker = true;
    trashBtn.setAttribute ("class", "button btn");
})

let zero;

function drawZero(x, y){
    zero = new fabric.Circle({
        radius: 5,
        fill: 'green',
        left: x,
        top: y,
        originX: 'center',
        originY: 'center',
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
    });
    canvas.add(zero);
}

canvas.on('mouse:up', (event) => {
    console.log(event);
    if (event.isClick){
        console.log('yes');
        console.log(event.pointer.x);
    }
    drawZero(event.pointer.x, event.pointer.y);
});