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

elField1.addEventListener('change', (e) => {
  setHighlight(elField1, elField2);
});
elField2.addEventListener('change', (e) => {
  setHighlight(elField1, elField2);
});
