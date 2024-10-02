var isSquare = function (n) {
    if (n < 0) {
        return false;
    }
    root = Math.floor(Math.sqrt(n));
    return root * root == n; // fix me
};

console.log(isSquare(25));
