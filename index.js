// let r = document.getElementById('rect');
// let img;
// r.addEventListener('click', (event) => {
//     console.log(event.offsetX, event.offsetY);
//     // img = document.createElement('img');
//     // img.src = "./static/close.png"
//     // img.width = 16;
//     // img.height = 16;
//     // img.style.color = "white";
//     // img.style.display = "inline-flex";
//     // const x = event.offsetX;
//     // const y = event.offsetY;
//     // img.style.transform = `translate(${x}px, ${y}px)`;
//     // r.appendChild(img);
//     // img.addEventListener('click',fn);
//     // r.removeEventListener('click');
// });

// function fn(event){
//     img.remove();
// }
let rectangle = document.getElementById('rect');
let image;
let polePath = "./static/close.png";
let zeroPath = "./dry-clean.png";
// class Zero_Pole{
//     constructor(xpos, ypos){
//         this.x = xpos;
//         this.y = ypos;
//     }

//     createZero(id){
//         createImage(zeroPath, this.x, this.y, id);
//     }
//     createPole(id){
//         createImage(polePath, this.x, this.y, id);
//     }
// }




let zeroBtn = document.getElementById('zero');
let zeroCounter = 0;
let poleBtn = document.getElementById('pole');
let poleCounter = 0;
let btnChecker = true;
let wrapper = document.getElementById('wrap');



zeroBtn.setAttribute ("class", "button btn");
zeroBtn.addEventListener('click', () => {
    if (poleBtn.getAttribute("class") == "button btn"){
        poleBtn.setAttribute ("class", "button");  
    }
    // if (trashBtn.getAttribute("class") == "button btn"){
    //     trashBtn.setAttribute ("class", "button");  
    // }
    btnChecker = true;  
    // deleteChecker = false;
    zeroBtn.setAttribute ("class", "button btn");
    
});

poleBtn.addEventListener('click', () => {
    if (zeroBtn.getAttribute ("class") == "button btn"){
        zeroBtn.setAttribute ("class", "button");
    }
    // if (trashBtn.getAttribute("class") == "button btn"){
    //     trashBtn.setAttribute ("class", "button");  
    // }
    btnChecker = false;  
    // deleteChecker = false;
    poleBtn.setAttribute ("class", "button btn");
});

function drawZero(event){
    createImage(zeroPath, event.offsetX, event.offsetY, `${counter}`);
    counter ++;
}

function createImage(path, x, y, id){
    image = document.createElement('img');
    image.src = path;
    image.width = 8;
    image.height = 8;
    image.id = id;
    image.style.transform = `translate(${x}px, ${y}px)`;
    rectangle.appendChild(image);   
}

rectangle.addEventListener('mouseup', (event) => {
    switch (event.button){
        case 0:
            if(btnChecker){
                createImage(zeroPath, event.offsetX, event.offsetY, `${zeroCounter}`);
                zeroCounter ++;
            }else{
                createImage(polePath, event.offsetX, event.offsetY, `${poleCounter}`);
                poleCounter ++;
            }
        case 2:
            rectangle.addEventListener('contextmenu', (event) => {
                event.preventDefault(); // prevent the deafult context menu of the browser
                
                wrapper.style.left = `${event.offsetX}px`;
                wrapper.style.top = `${event.offsetY}px`;
                wrapper.style.visibility = "visible";
                wrapper.addEventListener('click', () => {
                    // clear();
                    // canvas.removeChild(document.getElementById(identity));
                    wrapper.style.visibility = "hidden";
                });
            
            });
            break;
        default: 
            console.log("unknown click");
    }
    
});