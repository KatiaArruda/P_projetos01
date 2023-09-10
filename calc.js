const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' ',
]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document
  .getElementById('copyToClipboard')
  .addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
      button.innerText = 'Copied!'
      button.classList.add('success')
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = 'Copy'
      button.classList.remove('success')
    }
  })

document.getElementById('themeSwitcher').addEventListener('click', function () {
  //Alterar o thema para claro
  if (main.dataset.theme === 'dark') {
    //cor: Roxo Claro
    root.style.setProperty('--bg-color', '#e4e7f4')
    //cor:cinza claro
    root.style.setProperty('--border-color', '#aaa')
    //Cor:Cinza
    root.style.setProperty('--font-color', '#808080')
    //cor:vermelho claro
    root.style.setProperty('--primary-color', '#ff6961')
    main.dataset.theme = 'light'
  } else {
    //Cor:Preto
    root.style.setProperty('--bg-color', '#000000')
    //Cor:marrom escuro
    root.style.setProperty('--border-color', '#666')
    //Cor:Roxo
    root.style.setProperty('--font-color', '#EE82EE')
    //Cor: Marrom rosado
    root.style.setProperty('--primary-color', '#bc8f8f')
    main.dataset.theme = 'dark'
  }
})
