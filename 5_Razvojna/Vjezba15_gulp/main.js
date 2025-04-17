// Ukljuci jQuery
const jqr = require('jquery');

// Postavi window $ i jQuery objekte na jQuery
window.$ = window.jQuery = jqr;

// Ukljuci Handlebars
window.Handlebars = require('handlebars');

// Ukljuci bootstrap
import 'bootstrap';

// Ukljuci script.js
require('./src/script.js');