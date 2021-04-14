const sayHello = (name) => {
    if (typeof name !== "string") return;
    
    if (name.toLowerCase() === "mark") {
        return `Hi, ${name}!`
    } else {
        return `Hello, ${name} !`
    }
}
console.log(sayHello("Dima"));
console.log(sayHello("mark"));
