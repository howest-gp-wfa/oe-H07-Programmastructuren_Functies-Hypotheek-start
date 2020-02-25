"use strict";
/**
 * formule hypotheek met annuiteiten
 * annuïteit = (maandrente / (1 - ((1 + maandrente) ^ - aantal periodes))) * hypotheekbedrag
 */
//declare global vars here
var btnCalculate;
var tblResultaat;
var fltBedrag;
var intLooptijd;
var fltRente;

var txtBedrag;
var txtLooptijd;
var txtRente;
var divErrorMessage;
 
window.addEventListener('load',Initialize);

function Initialize()
{
   //bind elements
   btnCalculate = document.querySelector("#btnCalculate");
   tblResultaat = document.querySelector("#resultaat");
   txtBedrag = document.querySelector("#txtBedrag");
   txtLooptijd = document.querySelector("#txtLooptijd");
   txtRente = document.querySelector("#txtRente");
   divErrorMessage = document.querySelector("#errorMessage");
   //add listener
   btnCalculate.addEventListener("click",Calculate);
   tblResultaat.style.display = "none";
}

/**
 * calculates hypotheek met annuiteiten
 */
function Calculate()
{
   if(!Validate())
      return;
   let fltMaandRente = (fltRente / 100)/12;
   let intLooptijdInMaanden = intLooptijd *12;
   let bedragPlusRente;
   //Math.pow((1 + fltMaandRente),-intLooptijdInMaanden);
   let fltAnnuiteit =  (fltMaandRente / (1 - Math.pow((1 + fltMaandRente),-intLooptijdInMaanden))) * fltBedrag;
   fltAnnuiteit = Math.round(fltAnnuiteit);
   bedragPlusRente = fltAnnuiteit * intLooptijdInMaanden;
   let tableContent = BuildTable(Math.round(bedragPlusRente),fltAnnuiteit);
   tblResultaat.style.display = "block";
   tblResultaat.innerHTML = tableContent;
   
}
/**
 * validates input
 */
function Validate()
{
   fltBedrag = parseFloat(txtBedrag.value);
   fltRente = parseFloat(txtRente.value);
   intLooptijd = parseInt(txtLooptijd.value);
   if(isNaN(fltBedrag) || isNaN(fltRente) || isNaN(intLooptijd))
   {
      divErrorMessage.classList.add("errorDiv");
      divErrorMessage.innerHTML = "Bedrag, rente en looptijd moeten getallen groter dan 0 zijn!";
      return false;
   }
   else
   {
      return true;
   }
}
function BuildTable(totaalBedrag,annuiteit)
{
   let htmlTable = "<tr><th>Maand</th><th>Uitstaand bedrag</th><th>Te betalen</th></tr>";
   let teller = 1;
   while(totaalBedrag > 0)
   {
      console.log(totaalBedrag-annuiteit);
      htmlTable += MakeRow(teller,totaalBedrag,annuiteit);
      totaalBedrag -= annuiteit;
      teller++;
   }
   return htmlTable;
}
function MakeRow(teller,td1,td2)
{
   let row = `<tr>${MakeCell(teller)}${MakeCell(td1)}${MakeCell(td2)}</tr>`;
   return row;
}

function MakeCell(cellData)
{
   let cell = `<td>${cellData}</td>`;
   return cell;
}

