const fn1 = (string) => {
    const str = string[0].toUpperCase();
    const qwe = string.slice(1).toLowerCase();
    const qqq = str + qwe;
    return qqq;
}
console.log(fn1("qweWEE"));