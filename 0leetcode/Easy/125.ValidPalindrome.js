const isValid = (str) => {
    const s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return s == s.split("").reverse().join("")
}

s = "race a car"
//console.log(isValid(s))