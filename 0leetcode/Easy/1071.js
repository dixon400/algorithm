// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

var gcdOfStrings = function(str1, str2) {
    let gcd = (a,b) => {
        while(b){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    let len = gcd(str1.length, str2.length);
    let str = str1.slice(0,len);
    return str.repeat(str1.length/len) === str1 && str.repeat(str2.length/len) === str2 ? str : "";
}