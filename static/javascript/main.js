// I need to make identify the canvas 
// Identify context 2d 
// making a curve in the center (200,200)
// making two lines for representing the unit circle axis


// making a class for zeros / poles
    // make a constructer with xpos, ypos
    // make a function called draw zero and pass context as a parameter
        // begin path
        // drawing arc at xpos,ypos with filling it with black
        // close path
    // make a function called draw pole and pass a context as a parameter
        // create an image element 
        // set a link to the image to the src
        // style width and height 
        // put context draw image with xpos and ypos in onload event
        // N.B for visual looking put subtract 8 from the vertex [comment]
        // thus the actual vertex point is by adding 8 [comment]


// make two viceversa button (zero button and pole button) in html file
// retrieve zero and pole id
// add event listener clicking for id zero
    // arrow function
        // checking if the pole is selected 
            // then set a style to pole
        // set button checker to true (zero button is selected)
// same code for id pole
        


// add event listener clicking for canvas
// arrow function 
    // if i clicked zero then draw zero and push the vertex to an array 
    // else draw pole and push the vertex to an array 





let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.style = "margin: 10px 0 0 0";

function drawLine(x0, y0, x1, y1){
    context.moveTo(x0,y0);
    context.lineTo(x1,y1);
    context.stroke();
}

function unitCircle(){
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.arc(200, 200, 120, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    drawLine(5, 200, 395, 200);
    drawLine(200, 5, 200, 395);
}

unitCircle();


class Zero_Pole{
    constructor(xpos, ypos){
        this.x = xpos;
        this.y = ypos;

    }

    drawZero(context) {
        context.beginPath();
        context.fillStyle = 'black';
        context.arc(this.x, this.y, 5, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }

    drawPole(context, id){
        let img = new Image;
        img.src = "../static/close.png";
        img.id = id;
        canvas.appendChild(img);
        img.addEventListener('mouseenter',fun);
        img.onload= () => {
            context.drawImage(img, this.x, this.y, 16, 16);
        };

    }
}




// let z = new Zero_Pole(8,17);
// let y = new Zero_Pole(200,100);
// let p = new Zero_Pole(200 + 120 - 8, 200 - 8);
// let b = new Zero_Pole(100 - 8, 200 - 8);
// z.drawZero(context);
// y.drawZero(context);
// p.drawPole(context, '1');
// b.drawPole(context, '2');

// let wrapper = document.getElementById('wrap');
let zeroBtn = document.getElementById('zero');
let poleBtn = document.getElementById('pole');
let trashBtn = document.getElementById('delete');
let btnChecker = true;
let deleteChecker = false;
let zeros = [];
let zeroCounter = -1;
let poles = [];
let poleCounter = -1;

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

canvas.addEventListener('mouseup', fn);

// switch cases
// case 0 : then put a zero or put a pole
// case 2(right click): then open a context menu contains Delete function



// canvas.addEventListener('contextmenu', (event) => {
//     event.preventDefault(); // prevent the deafult context menu of the browser
    
//     wrapper.style.left = `${event.offsetX}px`;
//     wrapper.style.top = `${event.offsetY}px`;
//     wrapper.style.visibility = "visible";

// });



function fn(event){
    switch (event.button){
        case 0:
            // wrapper.style.visibility = "hidden";
            if (deleteChecker){
                context.clearRect(event.offsetX - 8, event.offsetY - 8, 16, 16);
                unitCircle();
                
            }else{
                if (btnChecker){
                    zeroCounter += 1;
                    let dot = new Zero_Pole(event.offsetX,event.offsetY);
                    dot.drawZero(context);
                    zeros.push([event.offsetX,event.offsetY]);
            
                }else{
                    poleCounter += 1;
                    let x = new Zero_Pole(event.offsetX - 8, event.offsetY - 8);
                    x.drawPole(context, `${poleCounter}`);
                    poles.push([event.offsetX, event.offsetY]);
                    
                    
            
                }
            }
            
            break;
        case 2:
            canvas.addEventListener('contextmenu', (event) => {
                event.preventDefault(); // prevent the deafult context menu of the browser
                
                // wrapper.style.left = `${event.offsetX}px`;
                // wrapper.style.top = `${event.offsetY}px`;
                // wrapper.style.visibility = "visible";
                // wrapper.addEventListener('click', () => {
                //     clear();
                //     // canvas.removeChild(document.getElementById(identity));
                //     wrapper.style.visibility = "hidden";
                // });
            
            });
            break;
        default: 
            console.log("unknown click");
    }
}

function fun(){
    console.log("what the fuck");
}