// Seletores dos elementos do relógio
const ponteiroHora = document.querySelector('.hour')
const ponteiroMinuto = document.querySelector('.minute')
const ponteiroSegundo = document.querySelector('.second')
const elementoHora = document.querySelector('.time')
const elementoData = document.querySelector('.date')
const botaoAlternarTema = document.querySelector('.toggle')

// Dias e meses em português
const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const mesesAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

// Alternar entre modo claro e escuro
botaoAlternarTema.addEventListener('click', (evento) => {
  const html = document.documentElement
  const modoEscuroAtivo = html.classList.toggle('dark')
  evento.target.innerText = modoEscuroAtivo ? 'Modo claro' : 'Modo escuro'
})

// Função para atualizar o relógio
function atualizarRelogio() {
  const agora = new Date()
  const mes = agora.getMonth()
  const diaSemana = agora.getDay()
  const diaMes = agora.getDate()
  const horas = agora.getHours()
  const minutos = agora.getMinutes()
  const segundos = agora.getSeconds()

  const horasRelogio = horas % 12 || 12 // 12h format
  const periodo = horas >= 12 ? 'PM' : 'AM'

  // Atualiza ponteiros analógicos
  ponteiroHora.style.transform = `translate(-50%, -100%) rotate(${escalar(horasRelogio, 0, 12, 0, 360)}deg)`
  ponteiroMinuto.style.transform = `translate(-50%, -100%) rotate(${escalar(minutos, 0, 60, 0, 360)}deg)`
  ponteiroSegundo.style.transform = `translate(-50%, -100%) rotate(${escalar(segundos, 0, 60, 0, 360)}deg)`

  // Atualiza hora digital e data
  elementoHora.innerHTML = `${horasRelogio}:${minutos.toString().padStart(2, '0')} ${periodo}`
  elementoData.innerHTML = `${diasSemana[diaSemana]}, ${mesesAno[mes]} <span class="circle">${diaMes}</span>`
}

// Função utilitária para mapear um valor de um intervalo para outro
function escalar(numero, entradaMin, entradaMax, saidaMin, saidaMax) {
  return ((numero - entradaMin) * (saidaMax - saidaMin)) / (entradaMax - entradaMin) + saidaMin
}

// Inicializa e atualiza o relógio a cada segundo
atualizarRelogio()
setInterval(atualizarRelogio, 1000)
