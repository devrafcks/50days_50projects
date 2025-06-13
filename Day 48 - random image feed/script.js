const container = document.querySelector('.container');
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`;
  container.appendChild(img);
}

