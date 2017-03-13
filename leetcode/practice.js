/* Given an input string, reverse the string word by word. */
const reverseWords = str => {
  return str.split(' ').reverse().join(' ');
};

console.log(reverseWords('the sky is blue'));