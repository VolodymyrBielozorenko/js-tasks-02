function findLongestWord(string = "") {
  let arrLength = string.split(" ").map((item) => item.length);
  let maxLength = Math.max.apply(null, arrLength);
  return string.split(" ").find((item) => item.length === maxLength);
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
("jumped");

console.log(findLongestWord("Google do a roll"));
("Google");

console.log(findLongestWord("May the force be with you"));
("force");

// Условие:

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
