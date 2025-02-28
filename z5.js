function primeFactors(n) {
    let array= [];
    let count = 0;
    while (n % 2 === 0) {
        n /= 2;
        count++;
    }
    if (count > 0) {
        array.push(`(2${count > 1 ? '**' + count : ''})`);
    }
    let p = 3;
    while (p * p <= n) {
        count = 0;
        while (n % p === 0) {
            n /= p;
            count++;
        }
        if (count > 0) {
            array.push(`(${p}${count > 1 ? '**' + count : ''})`);
        }
        p += 2;
    }
    if (n > 1) {
        array.push(`(${n})`);
    }
    return array.join('');
}
console.log(primeFactors(86240)); 
