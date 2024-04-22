/* Реализуйте и экспортируйте по умолчанию функцию,
 которая возвращает длину последнего слова переданной на вход строки.
 Словом считается любая последовательность, не содержащая пробелов. */

const getLastWordLength = (str) => {
    const string = str.trim().split(' ');
    const lastWord = string[string.length - 1];
    
    return lastWord.length;
  };
  
  console.log(getLastWordLength('')); // 0
  console.log(getLastWordLength('moon is white')); // 5
  console.log(getLastWordLength('Hello, World!  ')); // 6
