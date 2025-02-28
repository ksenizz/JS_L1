function solution(str){
    let array = [];
    let length = str.length;
    for (let i = 0; i < length; i += 2) {
        if (i + 1 < length) {
            array.push(str[i] + str[i + 1]);
        } else {
            array.push(str[i] + '_');
        }
    }
    return array;
}
console.log(solution('abc'));
console.log(solution('abcdef')); 