function isPalindrome(string){
    console.log(string);
    if (string.length === 1) {
        return true;
    } else if (string.length === 2 && (string[0] === string[1])) {
        return true;
    }
    if (string[0] === string[string.length - 1]) {
        return true && isPalindrome(string.substring(1, string.length - 1));
    } else {
        return false;
    }
}
