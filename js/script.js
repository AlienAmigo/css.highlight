import { setHighlight } from './setHighlight.js';

if (window.CSS && CSS.highlights) {
  console.log('window.CSS CSS.highlights enable');
} else {
  console.log('window.CSS CSS.highlights disable');
}

// =============
const elField1 = document.querySelector('#string1');
const elField2 = document.querySelector('#string2');

setHighlight(elField1, elField2);

const handleOnChange = (e) => {
  setHighlight(elField1, elField2);
};

elField1.addEventListener('inpute', (e) => {
  handleOnChange(e);
});
elField2.addEventListener('input', (e) => {
  handleOnChange(e);
});
