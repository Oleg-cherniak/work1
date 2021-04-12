const a = [1, 2, 3, "1", "2"];
const newArray = a.map( x => {
    if (typeof x === "number") {
        return String(x);
    } else if (typeof x === "string") {
        return Number(x);
    }
})
console.log(newArray);