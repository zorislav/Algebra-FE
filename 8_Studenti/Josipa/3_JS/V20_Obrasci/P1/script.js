// 1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

// 2. Exportajte modul iz datoteke.

import { exercise } from "./utility/first.js";

console.log(exercise.getTotalSteps());
exercise.walk();
exercise.walk();
exercise.walk();
console.log(exercise.getTotalSteps());
console.log(exercise.steps);
