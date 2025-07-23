const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const userName = event.currentTarget.value.trim();
  outputEl.textContent = userName === '' ? 'Anonymous' : userName;
}
