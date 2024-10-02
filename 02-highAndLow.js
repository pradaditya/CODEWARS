// Link Codewars: https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    let num = numbers.split(/\s+/).map(Number);
    let maxNum = Math.max(...num);
    let minNum = Math.min(...num);
    return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3"));