import { setHighlight } from './setHighlight.js';

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
