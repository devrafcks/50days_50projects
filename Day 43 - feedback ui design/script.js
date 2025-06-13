const avaliacoes = document.querySelectorAll('.rating');
const containerAvaliacoes = document.querySelector('.ratings-container');
const botaoEnviar = document.querySelector('#send');
const painel = document.querySelector('#panel');

let avaliacaoSelecionada = 'Satisfeito';

// Clique em uma avaliação
containerAvaliacoes.addEventListener('click', (e) => {
  const elemento = e.target.closest('.rating');

  if (elemento) {
    removerClasseAtiva();
    elemento.classList.add('active');
    avaliacaoSelecionada = elemento.querySelector('small').innerText;
  }
});

// Clique no botão "Enviar"
botaoEnviar.addEventListener('click', () => {
  painel.innerHTML = `
    <i class="fas fa-heart" style="color:#e63946; font-size: 40px;"></i>
    <h2>Obrigado!</h2>
    <strong>Você avaliou como: ${avaliacaoSelecionada}</strong>
    <p>Usaremos sua resposta para melhorar nosso atendimento.</p>
  `;
});

// Remove classe ativa de todas as opções
function removerClasseAtiva() {
  avaliacoes.forEach((el) => el.classList.remove('active'));
}
