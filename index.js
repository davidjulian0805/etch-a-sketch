const gridButton = document.getElementById('btnGrid');
const resetButton = document.getElementById('btnReset');

createGrid(16);

gridButton.addEventListener('click', function() {
  const input = prompt('Enter number of squares per side (max 100):');
  
  if (input === null) return;
  
  const num = parseInt(input);
  
  if (isNaN(num) || num < 1 || num > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  
  createGrid(num);
});

resetButton.addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.classList.remove('drawn');
    square.style.backgroundColor = 'white';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(squaresPerSide) {
  const container = document.getElementById('container');
  
  container.innerHTML = '';
  
  const containerSize = 960;
  const squareSize = containerSize / squaresPerSide;
  
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    
    square.addEventListener('mouseenter', function() {
      square.style.backgroundColor = getRandomColor();
      square.classList.add('drawn');
    });
    
    container.appendChild(square);
  }
}