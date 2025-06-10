const container = document.getElementById('container')
const colors = [
  '#e74c3c',
  '#8e44ad', 
  '#3498db',
  '#e67e22', 
  '#2ecc71',
  '#f1c40f', 
  '#ff00ff', 
  '#00ffff',
  '#ff1493', 
  '#7fff00', 
  '#00ff00', 
  '#ff4500', 
  '#1e90ff', 
  '#ff0000', 
  '#9400d3', 
  '#00ffcc', 
  '#ffa500', 
  '#39ff14',
  '#ff69b4',
  '#dc143c' 
]
const SQUARES = 2001

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
