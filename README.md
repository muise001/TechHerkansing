# Love Seekers

Love Seekers is een volledige dating website waar je matches kan maken en games kan spelen tegen je matches!

## Het Design
Voor het design van deze website heb ik gekozen voor een "wolken / stak-blauwe-lucht" thema. Dit heb ik gekozen met het  spreekwoord "in de wolken" in mijn achterhoofd. Dit spreekwoord is precies het gevoel wat ik wil bereiken met deze website.

**Homepage Love Seekers**
<img src="https://github.com/muise001/TechHerkansing/blob/master/readme%20img/index.png" alt="homepage"/>

#### De achtergrondkleur
Voor de achtergrond heeft een lichtblauwe kleur. Deze kleur heb ik gekozen omdat deze blauw de kleur is van lekker weer. Als je deze kleur ziet, associeer je hem meteen met een warme zomerse dag. Het is een vriendelijke kleur en niet aanvallend. Ook past hij goed bij het thema "in de wolken". 
#### De wolken
De wolken heb ik speels en niet te serieus gemaakt. Daten moet namelijk een ontspannen bezigheid zijn. Door de website speels en leuk te houden, houdt ik de goede doelgroep binnen. Deze doelgroep bestaat uit jonge mensen (20+ en 40-). Dit thema past ze precies.
#### Het Lettertype
Het lettertype ([Amatic SC](https://fonts.googleapis.com/css?family=Amatic+SC)) is wederom gekozen omdat hij speels overkomt en de doelgroep goed past. 

## De Code
In mijn app gebruik ik : 
```javascript
const express = require('express')              // Maakt het renderen en routen makkelijker
const ejs = require('ejs')                      // Templating tool
const bodyParser = require('body-parser')       // Makkelijk forms parsen
const mysql = require("promise-mysql")          // Zodat we met queries kunnen ophalen als promises
const ENV = require("dotenv").config().parsed   // Geheime server-info die alleen op mijn computer staat
const md5 = require("md5")                      // Wachtwoord encryptie
const session = require("express-session")      // Zodat bepaalde pagina's alleen bekeken kunnen worden na login
```

## De Database
Ik gebruik mijn eigen data-base die live staat. Hierdoor hoef ik geen Mamp of mySQLworkbench te gebruiken. In mijn eigen database gebruik ik PHP-myAdmin. Hieronder de structuur van wat ik tot nu toe in de database opsla

<img src="https://github.com/muise001/TechHerkansing/blob/master/readme%20img/database.png" alt="db">

Deze structuur is nu natuurlijk nog vrij basic. Wat ik wil doen is sub-database-categorien aanmaken. Daarij zit ik te denken aan drie toevoegingen. Ze staan in volgoorde van prioriteit
  1. Extra DB Info
      - Favoriete eten
      - Hobbies
      - Vragenlijst antwoorden
      - Baan
  2. Fotos DB
      - Profielfoto
      - Prive-foto's
  3. Game DB
      - Highscore (van eventuele game. Zie plannen hieronder)

<img src="https://github.com/muise001/TechHerkansing/blob/master/readme%20img/db_plan.jpg" alt="db_plan">

## Uitbreidingsplannen
Love Seekers heeft veel potetentie om groter te worden. Tot nu toe heeft de website namelijk alleen nog
  - een aanmeldpagina met database koppeling
  - werkende login met beveiliging
  - Een homepage waarop je potentiele matches ziet
  
### Matching
Ik wil het matchen verbeteren. Tot nu toe zoekt hij alleen matches die het geslacht hebben van jou voorkeur, en de voorkeur hebben van jou geslacht. (zie hieronder de query).

```"SELECT * FROM users WHERE gender = (SELECT preference FROM users WHERE ID = ?) AND preference = (SELECT gender FROM users WHERE id = ?)"```

Maar dit wil ik anders. Dit zou namelijk kunnen betekenen dat je iemand ziet op de homepage die volgens het systeem een match is, maar dit helemaal niet is.

De manier waarop ik dit wil gaan verbeteren is door na het maken van een profiel de keuze te geven om een vragenlijst in te vullen met persoonlijke vragen. Zoals favoriete eten, hobbies en andere persoonlijke kwesties. Door deze vragen te stellen aan de gebruiker EN aan potentiele matches, kan ik een gemiddelde berekenen tussen de overeenkomsten van deze vragen. Hierna wil ik ze sorteren op overeenkomsten, zodat je op de home-page helemaal bovenaan je "beste match" vindt.

### Profielpagina's
Op het moment is er nog geen profielpagina. Dat betekent dat gebruikers na hun eerste bezoek hun gegevens niet meer kunnen aanpassen. Hierdoor is het geven van optionele mogenlijkheden in de aanmeldpagina niet handig, aangezien je deze later niet meer kan aanpassen. 

Ook wil ik dat de profielpagina van iemand uitgebreider is, dan alleen de informatie die je al ziet op de home-page. Hier wil ik bijvoorbeeld de top drie overeenkomsten (van het bovenstaande matching-idee) en top drie verschillen tonen. 

Dit is nog niet alles. Ook wil ik dat de gebruiker zelf de mogenlijkheid krijgt om deze informatie aan te vullen.

### Game
Ook leek het me leuk om een simpele game te maken. Deze speel je in je eentje. Je score wordt in de database gezet en na het spelen van de game zie je potentiele matches met hun scores. Vanuit hier wil ik dat je meteen kan doorklikken naar zijn / haar profiel. Dan heb je meteen een onderwerp om over te praten om het ijs te breken.

### Admin page
Tegenwoordig zit het internet vol met internettrollen. Wat is nou een betere plek om te trollen, dan een gratis datingservice. Voor de veiligheid van mijn gebruikers, wil ik een admin-page maken. Hierop zie je een lijst met alle profielen. Deze kan je verbannen voor een bepaalde periode of volledig verwijderen. Het e-mail-adress komt dan op een "zwarte-lijst" en deze kan geen nieuw profiel aanmaken.

### Foto's toevoegen
Om je profiel nog een beetje verder op te leuken, wil ik dat je foto's kan toevoegen. Hierdoor kan jij beter laten zien wie je bent aan potentiele matches en kan jij veel beter inschatten of jou match wel echt bij je past. Ik wil beginnen met een profiel-foto en 3 persoonlijke foto's.

### First Login
Nadat je voor het eerst heb ingelogd is je profiel eigenlijk nog niet af. Maar als je op de aanmeld-pagina meteen 4 lange formulieren toevoegd, dan haakt je gebruiker misschien af. Dit is niet de bedoeling. Nadat je profiel is aangemaakt, en je inlogd wil ik een pop-up genereren met : "Je profiel is nog niet af. Hierdoor kan je nog niet optimaal matchen. Wil je deze nu invullen of later?". Zolang deze informatie niet in de database staat, krijg je deze pop-up na het inloggen.

De informatie die ik eruit wil halen staat hierboven bij het kopje "Matching"
