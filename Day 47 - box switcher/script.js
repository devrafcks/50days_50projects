const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing Digital',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      'Trabalhei com centenas de desenvolvedores HTML/CSS, e preciso dizer: este foi o melhor. Código limpo, atenção aos detalhes e comprometimento com o design. Cada projeto vira arte em forma de código. Recomendo sem hesitar.',
  },
  {
    name: 'June Cha',
    position: 'Engenheira de Software',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Profissional incrível! Entregou exatamente o que precisávamos. Foi além do combinado para garantir nossa satisfação. Sem dúvidas trabalharei com ele novamente.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Assistente de Dados',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      'Profissional dedicado, com excelente comunicação e disponibilidade. Sempre respondeu rapidamente, o que é raro. Vamos contratar de novo com certeza!',
  },
  {
    name: 'Renee Sims',
    position: 'Recepcionista',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      'Ele faz de tudo para entregar o trabalho certo. Já é a segunda vez que contrato e, com certeza, não será a última.',
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Designer Gráfico',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      'Achei que, pelo prazo curto, o projeto não fosse possível... Mas ele me provou o contrário! Entregou antes do prazo e ainda fez as revisões em minutos. Super recomendo!',
  },
  {
    name: 'Sasha Ho',
    position: 'Contadora',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Designer e desenvolvedor frontend de altíssimo nível. Comunicação clara, rapidez e qualidade na entrega. Tivemos muita sorte em trabalhar com ele!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Diretor de TI',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Profissional jovem, proativo e responsável. Tem domínio em conversão PSD para HTML e tecnologias web. Sempre cumpre os prazos e entrega resultados excelentes.',
  },
]

let idx = 1

function atualizarDepoimento() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(atualizarDepoimento, 5000)
