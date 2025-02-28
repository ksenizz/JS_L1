function createPhoneNumber(numbers){
    let ph_num = numbers.join('');
    let number=ph_num.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (number) {
        let first = number[1];   
        let second = number[2];  
        let third = number[3]; 
        return `(${first}) ${second}-${third}`;
    } 
    else {
        return '';
    }
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));