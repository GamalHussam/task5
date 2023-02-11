
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
let moveChecker = false;

let zeroBtn = document.getElementById('zero');
let poleBtn = document.getElementById('pole');
let trashBtn = document.getElementById('delete');
let moveBtn = document.getElementById('move');

zeroBtn.setAttribute ("class", "button btn");
zeroBtn.addEventListener('click', () => {
    if (poleBtn.getAttribute("class") == "button btn"){
        poleBtn.setAttribute ("class", "button");  
    }
    if (trashBtn.getAttribute("class") == "button btn"){
        trashBtn.setAttribute ("class", "button");  
    }
    // if (moveBtn.getAttribute("class") == "button btn"){
    //     moveBtn.setAttribute ("class", "button");  
    // }
    btnChecker = true;  
    deleteChecker = false;
    // moveChecker = false;
    zeroBtn.setAttribute ("class", "button btn");
    
});

poleBtn.addEventListener('click', () => {
    if (zeroBtn.getAttribute ("class") == "button btn"){
        zeroBtn.setAttribute ("class", "button");
    }
    if (trashBtn.getAttribute("class") == "button btn"){
        trashBtn.setAttribute ("class", "button");  
    }
    // if (moveBtn.getAttribute("class") == "button btn"){
    //     moveBtn.setAttribute ("class", "button");  
    // }
    btnChecker = false;  
    deleteChecker = false;
    // moveChecker = false;
    poleBtn.setAttribute ("class", "button btn");
});

trashBtn.addEventListener('click', (event) => {
    if (zeroBtn.getAttribute ("class") == "button btn"){
        zeroBtn.setAttribute ("class", "button");
    }
    if (poleBtn.getAttribute("class") == "button btn"){
        poleBtn.setAttribute ("class", "button");  
    }
    // if (moveBtn.getAttribute("class") == "button btn"){
    //     moveBtn.setAttribute ("class", "button");  
    // }
    deleteChecker = true;
    // moveChecker = false;
    trashBtn.setAttribute ("class", "button btn");
})

// moveBtn.addEventListener('click', () => {
//     if (zeroBtn.getAttribute ("class") == "button btn"){
//         zeroBtn.setAttribute ("class", "button");
//     }
//     if (poleBtn.getAttribute("class") == "button btn"){
//         poleBtn.setAttribute ("class", "button");  
//     }
//     if (trashBtn.getAttribute("class") == "button btn"){
//         trashBtn.setAttribute ("class", "button");  
//     }
//     deleteChecker = false;
//     moveChecker = true;
//     moveBtn.setAttribute ("class", "button btn");
// });

let zero;
let pole;
const imgInstance = document.getElementById('image');
let zeroObj = {
    radius: 5,
    fill: 'green',
    originX: 'center',
    originY: 'center',
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    lockMovementX: false,
    lockMovementY: false,
    hasBorders: false,
    hasControls: false,
    hoverCursor: 'default',

};

let poleObj = {
    originX: 'center',
    originY: 'center',
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasBorders: false,
    hasControls: false,
    hoverCursor: 'default',
};

function drawZero(object, x, y){
    object.left = x;
    object.top = y;
    zero = new fabric.Circle(object);
    canvas.add(zero);
}

function drawPole(object, x, y){
    object.left = x;
    object.top = y;
    pole = new fabric.Image(imgInstance, object);
    pole.scaleToWidth(13, true);
    pole.scaleToHeight(13, true);
    canvas.add(pole);
}


canvas.on('mouse:dblclick', (event) => {
    // console.log(event);
    if(deleteChecker){;}else{
        if(btnChecker){
            drawZero(zeroObj, event.pointer.x, event.pointer.y);
            // console.log(event.pointer.x , event.pointer.y); // sending this to back
     

        }else{


            drawPole(poleObj, event.pointer.x, event.pointer.y);
        }

    }
    
});

canvas.on('mouse:up', (event) => {

    if (deleteChecker){
        let selection = canvas.getActiveObjects();
        selection.forEach((obj) => {
            canvas.remove(obj);
        });
        canvas.discardActiveObject();
        // console.log(event);
    }
    
    // console.log(event.pointer.x); // sending it to back
    // console.log(event.pointer.y); // senging it to back
});
