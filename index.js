let r = document.getElementById('rect');
let img;
r.addEventListener('click', (event) => {
    console.log(event.offsetX, event.offsetY);
    // img = document.createElement('img');
    // img.src = "./static/close.png"
    // img.width = 16;
    // img.height = 16;
    // img.style.color = "white";
    // img.style.display = "inline-flex";
    // const x = event.offsetX;
    // const y = event.offsetY;
    // img.style.transform = `translate(${x}px, ${y}px)`;
    // r.appendChild(img);
    // img.addEventListener('click',fn);
    // r.removeEventListener('click');
});

function fn(event){
    img.remove();
}