const isEven = (number) => {
    if (typeof number !== "number") return;
    
    return !(number % 2);
}
console.log(isEven(5));
