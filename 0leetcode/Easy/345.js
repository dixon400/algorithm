// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    const arr = s.split('');
    
    const vowelPositions = [];
    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            vowelPositions.push(i);
        }
    }
    
    let left = 0;
    let right = vowelPositions.length - 1;
    
    while (left < right) {
        let temp = arr[vowelPositions[left]];
        arr[vowelPositions[left]] = arr[vowelPositions[right]];
        arr[vowelPositions[right]] = temp;
        
        left++;
        right--;
    }
    
    return arr.join('');
};

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"
