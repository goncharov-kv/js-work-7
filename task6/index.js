const cafe = {
    name: "Republic",
    width: 200,
    height: 300,
    personal: 5,
    hr: true
}
console.log(Object.entries(cafe));
const square = function(a, b) {
    return a * b
}
console.log(`площадь равна: ${square(cafe.width, cafe.height)}`)