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
