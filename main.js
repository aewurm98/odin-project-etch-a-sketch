function addColor(e) {
  const square = document.getElementById(e.target.id);

  // Random color version
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  square.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// function removeColor(e) {
//   const square = document.getElementById(e.target.id);
//   square.style.backgroundColor = '';
// }

function logId(e) {
  const square = document.getElementById(e.target.id);
  console.log(square.id);
}

function resizeGrid() {
  const size = prompt('What length square grid would you like? (Maximum 100)');
  const numsize = parseInt(size);
  console.log(typeof size);
  if (typeof numsize == 'number' && numsize > 0 && numsize <= 100) {
    // Empty existing grid
    const container = document.querySelector('.container');
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }

    // Determine fractional size for new squares
    const pct = (1 / numsize) * 100;
    const newWidth = `${pct}%`;

    // Create new squares and add them to the container with relevant css properties
    for (let n = 1; n <= numsize ** 2; n++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('square');
      newSquare.setAttribute('id', `${n}`);
      newSquare.style.flexBasis = newWidth;
      container.appendChild(newSquare);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('mouseover', addColor));

    // squares.forEach((square) =>
    //   square.addEventListener('mouseout', removeColor)
    // );

    squares.forEach((square) => square.addEventListener('click', logId));
  } else {
    alert('Invalid number!');
    resizeGrid();
  }
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => square.addEventListener('mouseover', addColor));

// squares.forEach((square) => square.addEventListener('mouseout', removeColor));

squares.forEach((square) => square.addEventListener('click', logId));

const resizeBtn = document.querySelector('.btn');

resizeBtn.addEventListener('click', resizeGrid);
