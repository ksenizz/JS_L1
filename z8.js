function expandedForm(num) {
    let result = [];
    if (num >= 1000000) {
        let millions = Math.floor(num / 1000000) * 1000000;
        result.push(millions);
        num %= 1000000;
    }
    if (num >= 1000) {
        let thousands = Math.floor(num / 1000) * 1000;
        result.push(thousands);
        num %= 1000;
    }
    if (num >= 100) {
        let hundreds = Math.floor(num / 100) * 100;
        result.push(hundreds);
        num %= 100;
    }
    if (num >= 10) {
        let tens = Math.floor(num / 10) * 10;
        result.push(tens);
        num %= 10;
    }
    if (num > 0) {
        result.push(num);
    }
    return `${result.join(' + ')}`;
}
console.log(expandedForm(12));   
console.log(expandedForm(456));  
console.log(expandedForm(420370022)); 

