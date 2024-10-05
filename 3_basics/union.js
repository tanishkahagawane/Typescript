var data = 10;
///////
function combine(a, b) {
    if (typeof a === 'number' && b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine("Tanishka", "H"));
