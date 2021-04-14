const deleteChars = (string) => {
    if (typeof string !== typeof "string") return;
    
    return string.slice(1, -1);
}

console.log(deleteChars("12345"));
