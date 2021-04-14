const capitalize = (string) => {
    if (typeof string !== "string") return;
    
    const firstChar = string[0].toUpperCase();
    const restString = string.slice(1).toLowerCase();
    return firstChar + restString;
}

console.log(capitalize("qweWEE"));
