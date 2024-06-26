'use strict'
const COPY_ICON = './assets/copy.svg'
const DONE_ICON = './assets/done.svg'

const $ = tag => document.querySelector(tag)

const $clean = $('#btn-clean')
const $translate = $('#btn-translate')
const $copy = $('#btn-copy')
const $textOrigin = $('#text-origin')

const dictionary = {
  Hi: 'Hola',
  TODAY: 'HOY',
  'I worked on': 'Trabajé en',
  Status: 'Estado',
  'Original Estimation': 'Estimación Original',
  'Worked Today': 'Trabajado Hoy',
  'Worked Hours': 'Horas Trabajadas',
  'WORKED TIME': 'TIEMPO TRABAJADO',
  TOMORROW: 'MAÑANA',
  'NEXT WEEK': 'SIGUIENTE SEMANA',
}

$clean.onclick = () => {
  $textOrigin.textContent = ''
}

$translate.onclick = () => {
  let text = $textOrigin.innerHTML
  for (const word in dictionary) {
    const translation = dictionary[word]
    text = text.replaceAll(word, translation)
  }
  $textOrigin.innerHTML = text
}

$copy.onclick = () => {
  const $img = $copy.querySelector('img')

  const text = $textOrigin.innerHTML
  setClipboard(text)

  $img.setAttribute('src', DONE_ICON)
  setTimeout(() => {
    $img.setAttribute('src', COPY_ICON)
  }, 600);
}

async function setClipboard(text) {
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}