# oe-Programmastructuren_Functies-HypotheekBerekenen
Schrijf een javascript app waarmee we de afbetaling van een hypotheek kunnen berekenen. 

## formule hypotheek met annuiteiten
 * maandrente = (jaarrente/100)/12
 * aantal_periodes = aantalJaar * 12
 * annuïteit = (maandrente / (1 - ((1 + maandrente) <sup> -aantal periodes</sup>))) * hypotheekbedrag

## Opdracht
* Gebruiker geeft volgende waardes in :
  * Bedrag die je wenst te lenen in Euro
  * Looptijd van terugbetaling in jaar
  * (Jaar)rente in %
* Systeem berekent de annuïteit (zie bovenstaande formule) en creëert een afbetalingstabel 

## Aandachtspunten
* Splits zo veel mogelijk logica in in functies
* Vul het table element(innerHTML) met rijen en kolommen
* Splits de functies af in een afzonderlijke function file

## Voorbeeld
![Voorbeeld](img/voorbeeld.png)
