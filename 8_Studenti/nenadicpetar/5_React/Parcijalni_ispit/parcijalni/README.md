🌌 GitHub User Viewer

Jednostavna React aplikacija za pregled GitHub korisnika i njihovih repozitorija.

🚀 Opis projekta

Aplikacija omogućuje unos GitHub korisničkog imena, dohvat podataka putem GitHub REST API-ja i prikaz osnovnih informacija o korisniku, kao i popis javnih repozitorija.

Korisnik može:

Pretražiti bilo kojeg GitHub korisnika

Pregledati profilnu sliku, ime, lokaciju, biografiju i broj repozitorija

Vidjeti popis repozitorija s opisima

Filtrirati repozitorije po nazivu

Resetirati aplikaciju za novi unos

🧠 Tehnologije

React.js — glavna biblioteka

Bootstrap / React-Bootstrap — za stilizaciju i UI komponente

PropTypes — validacija propsa

Fetch API — dohvat podataka s GitHub API-ja

🧩 Struktura projekta
src/
├── components/
│ ├── SearchForm.jsx → forma za unos korisničkog imena
│ ├── UserProfile.jsx → prikaz profila GitHub korisnika
│ └── RepoList.jsx → prikaz i filtriranje repozitorija
│
├── App.js → glavni container (stateful class komponenta)
├── App.css → stilizacija i animacije (fade-in)
├── index.js → ulazna točka aplikacije
└── index.css → globalni stilovi

⚙️ Pokretanje aplikacije

Kloniraj repozitorij ili napravi novi React projekt:

npx create-react-app parcijalni

Uđi u projekt:

cd parcijalni

Instaliraj potrebne pakete:

npm install react-bootstrap bootstrap prop-types

Pokreni aplikaciju:

npm start

💡 Glavne komponente
🔹 App.js

Class komponenta s state-om

Funkcije: handleSearch, handleReset

Renderira formu, spinner, profil i repozitorije

🔹 SearchForm.jsx

Funkcijska komponenta

useState za praćenje unosa

Poziva onSearch() i onReset() iz App-a

🔹 UserProfile.jsx

Funkcijska komponenta

Prikazuje korisnika, njegov bio, broj repozitorija, pratitelje i link na GitHub

🔹 RepoList.jsx

Funkcijska komponenta

useState za filtriranje repozitorija

Dinamički prikaz repozitorija pomoću .map()

✨ Dodatne značajke

🔄 Loading spinner prilikom dohvaćanja podataka

🌗 Fade-in animacija prilikom prikaza rezultata

🧭 PropTypes validacija

💅 Bootstrap layout i komponente

📸 Primjer izgleda
+---------------------------------------------------+
| GitHub User Viewer |
| [ facebook ] [ Search ] [ Reset ] |
|---------------------------------------------------|
| 👤 Mark Zuckerberg |
| 🌍 Location: Menlo Park, CA |
| 🧠 Bio: Building Meta... |
| 👥 Followers: 10000 🔁 Following: 50 📂 Repos: 45 |
| [ Otvori GitHub profil ] |
|---------------------------------------------------|
| 🔍 Pretraži repozitorije: [_____ ] |
| 📂 Repozitoriji (10) |
| • react |
| • relay |
| • jest |
| • ... |
+---------------------------------------------------+

🧾 Licenca

Projekt izrađen u edukativne svrhe u sklopu ReactJS kolegija.

👨‍💻 Autor: Petar Nenadić
📅 Godina: 2025
