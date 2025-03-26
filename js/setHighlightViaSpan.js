// =============
const setHighlightViaSpan = (el1, el2) => {
  const str1 = elField1.textContent;
  const str2 = elField2.textContent;

  // Находим диапазоны несовпадающих слов

  const handleOnInputChange = (e) => {
    console.log(str1, str2);
    const [rangesStr1, rangesStr2] = findMissingWordRanges(str1, str2);

    // Альтернативная реализация подсветки без экспериментального API
    function highlightText(elementId, text, ranges, color) {
      const element = document.getElementById(elementId);
      let result = '';
      let lastPos = 0;

      ranges.forEach(([start, end]) => {
        // Добавляем текст до подсвечиваемого участка
        result += text.slice(lastPos, start);
        // Добавляем подсвеченный текст
        result += `<span style="background-color: ${color}">${text.slice(
          start,
          end + 1
        )}</span>`;
        lastPos = end + 1;
      });

      // Добавляем оставшийся текст
      result += text.slice(lastPos);

      element.innerHTML = result;
    }

    // Применяем подсветку
    highlightText('string1', str1, rangesStr1, '#ffcccc');
    highlightText('string2', str2, rangesStr2, '#ccffcc');
  };
  handleOnInputChange();

  elField1.addEventListener('input', handleOnInputChange);
  elField2.addEventListener('input', handleOnInputChange);
};

export { setHighlightViaSpan };
