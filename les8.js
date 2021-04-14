const someFn = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return;

    const array3 = [...array1, ...array2];
    return array3;
}
console.log(someFn([1,2],[3,4]));
