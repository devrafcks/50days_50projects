const API_KEY = 'ee9f47eb4590fb599d346fa5bc8f2271';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const searchInput = document.getElementById('search');

// Carrega os filmes ao iniciar
getMovies(API_URL);

// Função principal para buscar e exibir filmes
async function getMovies(url) {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    renderMovies(results);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    main.innerHTML = `<p style="color: red;">Erro ao carregar os filmes. Tente novamente mais tarde.</p>`;
  }
}

// Renderiza os cards dos filmes
function renderMovies(movies) {
  main.innerHTML = '';

  if (movies.length === 0) {
    main.innerHTML = `<p style="color: #fff;">Nenhum filme encontrado.</p>`;
    return;
  }

  movies.forEach(({ title, poster_path, vote_average, overview }) => {
    const movieEl = document.createElement('div');
    movieEl.className = 'movie';

    movieEl.innerHTML = `
      <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/300x450?text=Sem+Imagem'}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getRatingClass(vote_average)}">${vote_average.toFixed(1)}</span>
      </div>
      <div class="overview">
        <h3>Sinopse</h3>
        <p>${overview || 'Sinopse não disponível.'}</p>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

// Define cor baseada na nota
function getRatingClass(vote) {
  if (vote >= 8) return 'green';
  if (vote >= 5) return 'orange';
  return 'red';
}

// Evento de busca
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    getMovies(`${SEARCH_API}${encodeURIComponent(searchTerm)}`);
    searchInput.value = '';
  } else {
    getMovies(API_URL);
  }
});
