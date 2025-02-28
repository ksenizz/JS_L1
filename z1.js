function hasTwoCubeSums(n) 
{
    let math = n ** (1/3);
    let array = [];
      for (let a = 1; a < math; a++) {
        for (let b = a + 1; b < math; b++) {
            if (a ** 3 + b ** 3 === n) {
                array.push([a, b]);
            }
        }
    }
      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let a = array[i][0];
            let b = array[i][1];
            let c = array[j][0];
            let d = array[j][1];
            if (a !== c || b !== d) {
                return true;
            }
        }
    }
     return false;
}
console.log(hasTwoCubeSums(1729));
console.log(hasTwoCubeSums(44));

