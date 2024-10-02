// function maskify(cc) {
//     const arr = cc.toString().split('');
//     for (let i = 0; i < arr.length - 4; i++) {
//         arr[i] = '#';
//     }
//     return arr.join('');
// }

// function maskify(cc) {
//     const str = cc.toString();
//     return str.slice(-4).padStart(str.length, '#');
// }

function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}
console.log(maskify(4556364607935616));
