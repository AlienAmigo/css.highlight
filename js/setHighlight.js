import { findMissingWordRanges } from './findMissingWordRanges.js';

const setHighlight = (el1, el2) => {
  const str1 = el1.textContent;
  const str2 = el2.textContent;

  const [rangesStr1, rangesStr2] = findMissingWordRanges(str1, str2);

  // Создаём подсветку на основе переданных элементов (не ID!)
  function createHighlightRanges(element, ranges) {
    const highlight = new Highlight();

    // Убедимся, что элемент существует и содержит текстовый узел
    if (!element || !element.firstChild) return highlight;

    const textNode = element.firstChild;

    for (const [start, end] of ranges) {
      const range = new Range();
      range.setStart(textNode, start);
      range.setEnd(textNode, end + 1);
      highlight.add(range);
    }

    return highlight;
  }

  // Создаём подсветки, передавая сами элементы (el1, el2)
  const highlightStr1 = createHighlightRanges(el1, rangesStr1);
  const highlightStr2 = createHighlightRanges(el2, rangesStr2);

  // Регистрируем подсветки
  CSS.highlights.set('missing-words-1', highlightStr1);
  CSS.highlights.set('missing-words-2', highlightStr2);
};

export { setHighlight };
