function toWeirdCase(string) {
    let words = string.split(" ");
    for (let j = 0; j < words.length; j++) {
        let mas = words[j].split("");
        for (let i = 0; i < mas.length; i++) {
            if (i % 2 === 0) {
                mas[i] = mas[i].toUpperCase();
            } else {
                mas[i] = mas[i].toLowerCase();
            }
        }
        words[j] = mas.join("");
    }
    return words.join(" ");
}
console.log(toWeirdCase("мама мыла раму"));
