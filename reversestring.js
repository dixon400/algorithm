function reverseWords(S) {
    const words = S.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedString = reversedWords.join(' ');
    return reversedString;
  }
  
  const S = "we test coders";
  console.log(reverseWords(S)); 