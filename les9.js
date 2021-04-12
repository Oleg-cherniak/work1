const fn1 = (str, y) => {
    if (y < str.length) {
        return str.slice(0, y) + "...";
    } else {
        return str;
    }
}
console.log(fn1("Privetiki", 6));