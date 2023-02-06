let r = document.getElementById('rect');
r.addEventListener('click', (event) => {
    console.log(event.offsetX, event.offsetY);
});