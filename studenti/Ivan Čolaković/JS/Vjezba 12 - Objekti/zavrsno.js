var auto = {
	brend: {
		tip: 'Volvo',
		model: 'V40',
	},
	boja: 'crvena',
	brzina: 60,
	maxBrzina: 160,
	godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi){
		while (brojSekundi && this.brzina <= this.maxBrzina) {
			this.brzina += 5; 
			brojSekundi--;
		}
		return this.brzina;
	},
	zakoci: function(brojSekundi){
		while (brojSekundi && this.brzina > 0) {
			this.brzina -= 20; 
			brojSekundi--;
		}
		return this.brzina;
	},
	promijeniBoju: function(boja) {
		this.boja = novaBoja;
		return this.boja;
	}
}

console.log(auto.zakoci(4));
console.log(auto.ubrzaj(10));

for (key in auto) {
	const value = auto[key];
	
	if (auto.propertyIsEnumerable(key)) {
		console.log(key + ': ' + value);
	}
}

console.log('Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja);
console.log(JSON.stringify(auto));