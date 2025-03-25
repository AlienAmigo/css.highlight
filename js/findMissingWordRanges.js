function findMissingWordRanges(str1, str2) {
  // Разбиваем строки на массивы слов
  const words1 = str1.split(/\s+/).filter((word) => word.length > 0);
  const words2 = str2.split(/\s+/).filter((word) => word.length > 0);

  // Находим слова, которые есть в первой строке, но нет во второй
  const missingInStr2 = words1.filter((word) => !words2.includes(word));
  // Находим слова, которые есть во второй строке, но нет в первой
  const missingInStr1 = words2.filter((word) => !words1.includes(word));

  // Функция для преобразования массива слов в массив диапазонов
  const getRanges = (words, fullStr) => {
    const ranges = [];
    let currentPos = 0;

    for (const word of words) {
      const start = fullStr.indexOf(word, currentPos);
      if (start === -1) continue;

      const end = start + word.length - 1;
      ranges.push([start, end]);
      currentPos = end + 1;
    }

    return ranges;
  };

  // Получаем диапазоны для отсутствующих слов в каждой строке
  const rangesStr1 = getRanges(missingInStr2, str1);
  const rangesStr2 = getRanges(missingInStr1, str2);

  return [rangesStr1, rangesStr2];
}

export { findMissingWordRanges };
