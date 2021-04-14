const arr = [1, 2, "3", "4"];
const newArray = arr.map( x => {
    if (!Array.isArray(arr)) return;
    if (typeof x === "number") {
        return String(x);
    } 
        return Number(x);
})
console.log(newArray);
