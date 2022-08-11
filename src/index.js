module.exports = function reverse (n) {
    let reversedNumber = "";
    let str = String(n);
    
    if (str[0] == '-') {
        str = str.slice(1);
    };
    
    for (let i = str.length; i > 0; i--) {
        reversedNumber = reversedNumber + str[i - 1];
    }
    return +reversedNumber;
}