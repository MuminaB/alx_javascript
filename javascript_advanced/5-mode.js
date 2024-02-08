function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};
function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

const p = document.createElement('p');
  p.textContent = 'Welcome Holberton!';
  document.body.appendChild(p);

  const b1 = document.createElement('button');
  b1.textContent = 'Spooky';
  
  b1.onclick = spooky;
  document.body.appendChild(b1);

  const b2 = document.createElement('button');
  b2.textContent = 'Dark mode';
  
  b2.onclick = darkMode;
  document.body.appendChild(b2);

  const b3 = document.createElement('button');
  b3.textContent = 'Scream mode';
  
  b3.onclick = screamMode;
  document.body.appendChild(b3);
};

main();
  
