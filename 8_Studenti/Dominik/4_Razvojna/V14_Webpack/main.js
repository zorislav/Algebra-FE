/*import jqr from "jquery";
import hb from "handlebars";
import "bootstrap";*/

const jqr = require("jquery");
const hb = require("handlebars");
require("bootstrap");

window.$ = window.jQuery = jqr;
window.Handlebars = hb;

require("./script.js");