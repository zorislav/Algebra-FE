//ovdje smo importirali objekt iz first.js

import {
    module1 as mod, ime  //mjenjamo ime 
}
from './first'; //moramo navesti i lokaciju odakle importiramo
import ispis from "./third.js";

mod.y();
console.log(ime);
ispis();