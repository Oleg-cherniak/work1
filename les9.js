const stringCutter = (string, symbolsQuantity) => {
    if (typeof string !== "string" || typeof symbolsQuantity !== "number") return;

    if (symbolsQuantity < string.length) {
        return string.slice(0, symbolsQuantity) + "...";
    } 
        return string;
}
console.log(stringCutter("Privetiki", 6));
