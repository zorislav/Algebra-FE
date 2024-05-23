var text = ' Lorem ipsum dolor sit amet';

var duljina_stringa = text.length;
console.log(duljina_stringa);

var rijecSit = text.substr(19,3);
console.log(rijecSit);

var rijecSit1 = text.substring(19,22);
console.log(rijecSit1);

var rijecAmet = text.replace('amet', 'emit')
console.log(rijecAmet);

var dodanitext = text + " consectetur adipiscing elit";
console.log(dodanitext);

var velikaslova = text.toUpperCase();
console.log(velikaslova);

var pocetnapraznina = text.trim();
console.log(pocetnapraznina);

var nadenoslovo = text.charAt(13);
console.log(nadenoslovo);

/*   1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12 */