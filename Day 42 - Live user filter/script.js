const result = document.getElementById('result')
const filter = document.getElementById('filter')
const countrySelect = document.createElement('select')
const countInfo = document.createElement('p')
const listItems = []
let allUsers = []

countrySelect.innerHTML = `<option value="">Filtrar por país</option>`
countrySelect.classList.add('country-filter')
filter.insertAdjacentElement('afterend', countrySelect)
result.insertAdjacentElement('beforebegin', countInfo)

filter.addEventListener('input', () => filterAndRender())
countrySelect.addEventListener('change', () => filterAndRender())

getData()

async function getData() {
  result.innerHTML = '<li><h3>Carregando usuários...</h3></li>'
  const res = await fetch('https://randomuser.me/api?results=100')
  const { results } = await res.json()

  allUsers = results.sort((a, b) => {
    return a.name.first.localeCompare(b.name.first)
  })

  const uniqueCountries = [...new Set(allUsers.map(user => user.location.country))].sort()
  uniqueCountries.forEach(country => {
    const opt = document.createElement('option')
    opt.value = country
    opt.textContent = country
    countrySelect.appendChild(opt)
  })

  renderUsers(allUsers)
}

function renderUsers(users) {
  result.innerHTML = ''
  listItems.length = 0

  users.forEach(user => {
    const li = document.createElement('li')
    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    result.appendChild(li)
  })

  updateCount()
}

function filterAndRender() {
  const searchTerm = filter.value.toLowerCase()
  const selectedCountry = countrySelect.value

  const filtered = allUsers.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    const location = `${user.location.city}, ${user.location.country}`.toLowerCase()
    const matchText = fullName + location
    const countryMatch = selectedCountry ? user.location.country === selectedCountry : true
    return matchText.includes(searchTerm) && countryMatch
  })

  renderUsers(filtered)
}

function updateCount() {
  const total = result.querySelectorAll('li').length
  countInfo.textContent = `Total exibido: ${total} usuário(s)`
}
