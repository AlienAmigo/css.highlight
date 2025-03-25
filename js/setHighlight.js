import { findMissingWordRanges } from './findMissingWordRanges.js';

const setHighlight = (el1, el2) => {
  const str1 = el1.textContent;
  const str2 = el2.textContent;

  const [rangesStr1, rangesStr2] = findMissingWordRanges(str1, str2);

  // Создаем объекты Range для подсветки
  function createHighlightRanges(str, ranges) {
    const highlight = new Highlight();

    for (const [start, end] of ranges) {
      const range = new Range();
      range.setStart(new Text(str), start);
      range.setEnd(new Text(str), end + 1);
      highlight.add(range);
    }

    return highlight;
  }

  // Создаем подсветки для обеих строк
  const highlightStr1 = createHighlightRanges(str1, rangesStr1);
  const highlightStr2 = createHighlightRanges(str2, rangesStr2);

  // Регистрируем подсветки
  CSS.highlights.set('missing-words-1', highlightStr1);
  CSS.highlights.set('missing-words-2', highlightStr2);

  // Добавляем строки в DOM
  el1.textContent = str1;
  el2.textContent = str2;
};

export { setHighlight };
