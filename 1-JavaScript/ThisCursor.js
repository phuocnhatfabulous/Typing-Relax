// Contructor
function car(type, color, name) {
    (this.type = type), (this.color = color), (this.name = name);
}
const Car = new car(4, "red", "Audi");
console.log(Car);
