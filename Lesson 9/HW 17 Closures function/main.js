function makeSum(x) {
    return function (y) {
        const result = x + y;
        x = result;
        return result;
    };
}

const sum = makeSum(0);
console.log(`sum(3) = ${sum(3)}`);
console.log(`sum(5) = ${sum(5)}`);
console.log(`sum(20) = ${sum(20)}`);
console.log(`sum(-14) = ${sum(-14)}`);
console.log(`sum(4) = ${sum(4)}`);
