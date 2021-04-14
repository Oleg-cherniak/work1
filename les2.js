const calculateHypotenuse = (leg1, leg2) => {
    if (typeof leg1 !== "number" || typeof leg2 !== "number") return;

    const legs = Math.pow(leg1, 2) + Math.pow(leg2, 2);
    const hypotenuse = Math.sqrt(legs);
    return hypotenuse;
}

console.log(calculateHypotenuse(3, 4));
