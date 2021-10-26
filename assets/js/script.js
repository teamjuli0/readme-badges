const btnEl = document.querySelector('button')
const output = document.getElementById('output').childNodes[0]

const inputEl = document.querySelector('input')
inputEl.addEventListener('keyup', function (e) {
  output.innerText = inputEl.value.toUpperCase()
})
