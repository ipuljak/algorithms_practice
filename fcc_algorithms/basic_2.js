// 1. Reverse a string

const reverseString = str => {
  let letters = str.split('');
  let letterCount = letters.length - 1;
  let curLetter;

  for (let x = 0; x < letters.length / 2; x++) {
    curLetter = letters[x];
    letters[x] = letters[letterCount];
    letters[letterCount] = curLetter;
    letterCount--;
  }

  return letters.join('');
};

console.log(reverseString('cokezerod'));