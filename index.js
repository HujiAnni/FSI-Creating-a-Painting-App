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


for (let i = 0; i < colorSelectors.length; i++){
    colorSelectors[i].addEventListener('click', (e)=>{
        selectedColor = e.target.id;
    })
}
