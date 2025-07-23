    const inputE1 = document.querySelector('#name-input');
    const outputE1 = document.querySelector('#name-output');
inputE1.addEventListeren('input', onInputChange);
function onInputChange(event) {
    const name = event.currentTarget.value.trim();
    const name = event.currentTarget.value.trim();
    outputE1.textContent = name === '' ? 'Anonimus' : name;
};
