const findMin = (firstNumber, secondNumber) => {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") return;
        
    return Math.min(firstNumber, secondNumber);
}
console.log(findMin(8,5));
