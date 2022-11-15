const painting = document.querySelector('.painting');

let selectedColor = 'blue';

const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const colorSelectors = [blue, red, yellow, green];

painting.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = selectedColor;
})

painting.addEventListener('dblclick', (e)=>{
    e.target.style.backgroundColor = "white";
})

for (let i = 0; i < colorSelectors.length; i++){
    colorSelectors[i].addEventListener('click', (e)=>{
        selectedColor = e.target.id;
    });
}

const palette = document.querySelector('.palette');

const purple = document.createElement('div');
purple.setAttribute('class','color-choice');
purple.setAttribute('id','purple');
purple.textContent = "■";
palette.appendChild(purple);

const clearButton = document.createElement('button');
clearButton.textContent = "Clear";
palette.appendChild(clearButton);

clearButton.addEventListener('click', ()=>{
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }
})