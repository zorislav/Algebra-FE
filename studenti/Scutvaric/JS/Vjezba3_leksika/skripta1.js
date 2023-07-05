/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: Ivan
 * @this {Circle}
 * @param {number} r radius of the circle
*/
function Circle(r) {
this.radius = r;
this.circumference = 2 * Math.PI * r;
}