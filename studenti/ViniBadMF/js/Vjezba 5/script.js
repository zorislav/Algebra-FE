//Koristeći metode rada nad stringovima iz zadanog stringa:
  //1. Spremite duljinu stringa u varijablu.
  //2. Izdvojite riječ 'sit' u zasebnu varijablu.
  //3. Zamijenite riječ 'amet' sa riječi 'elit'.
  //4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  //5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  //6. Maknite počenu prazninu u stringu
  //7. Nađite slovo na poziciji 12

var text = ' Lorem ipsum dolor sit amet';

  //1. Spremite duljinu stringa u varijablu.
    var duljina_stringa = text.length
    console.log(duljina_stringa)

  //2. Izdvojite riječ 'sit' u zasebnu varijablu.
    var rijecSit = text.substring(19,22)
    console.log(rijecSit)

  //3. Zamijenite riječ 'amet' sa riječi 'elit'.
    var zamjenaAmet_elit = text.replace('amet', 'elite')
    console.log(zamjenaAmet_elit)

  //4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
    var dodaj_mi_text = (text + ", consectetur adipiscing elit")
    console.log(dodaj_mi_text)

  //5. Konvertirajte sve riječi u orginalnom stringu u velika slova.
    var V_slovo = text.toUpperCase();
    console.log(V_slovo)

  //6. Maknite počenu prazninu u stringu
    var trimajteks = text.trim()
    console.log(trimajteks)

  //7. Nađite slovo na poziciji 12
  var slovo12 = text.charAt(12)
  console.log(slovo12)
  
