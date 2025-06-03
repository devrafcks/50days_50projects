const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => generateJoke());

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    jokeEl.innerHTML = 'Carregando piada...';

    const res = await fetch('https://icanhazdadjoke.com', config);

    if (!res.ok) throw new Error('Erro ao buscar piada');

    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    jokeEl.innerHTML = '😢 Ocorreu um erro. Tente novamente mais tarde.';
    console.error('Erro ao buscar piada:', error);
  }
}
