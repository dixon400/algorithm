const isValid = (str) => {
    const s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return s == s.split("").reverse().join("")
}

s = "race a car"
//console.log(isValid(s))

const check = (str) => {
    let len  = s.length;

    let count = 0;
    for(let i =0; i < len/2; i++) {
        if(s[i] != s[len - 1 - i]) {
            count++;
        }
    }

   if (count <= 1){
    return "yes"
   }
   else {
    return "no"
   };

}

s = "abbcca"
console.log(check(s))