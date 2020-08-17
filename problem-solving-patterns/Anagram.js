function validAnagram(string1, string2){
    if (string1.length !== string2.length) {
        return false;
    }
    let object1 = {};
    let object2 = {};
    for (let char of string1) {
        object1[char] = (object1[char] || 0 ) + 1;
    }
    for (let char of string2) {
        object2[char] = (object2[char] || 0 ) + 1;
    }
    for(const key in object1) {
        if (!(key in object2)) {
            return false;
        }
        if (object2[key] !== object1[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('',''));
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('rat','car'));
console.log(validAnagram('awesome','awesom'));
console.log(validAnagram('amanaplanacanalpanama','acanalplanmanpanama'));
console.log(validAnagram('qwerty','qeywrt'));
console.log(validAnagram('texttwisttime','timetwisttext'));
console.log(validAnagram('anagram','nagaram'));