 "use strict"
 let voornaamTxt;
 let achternaamTxt;
 let emailTxt;
 let geselecteerdevolwassenen;
 let volwassenenTxt;
 let geselecteerdekinderen;
 let kinderenTxt;
 let checkinTxt;
 let kamerTxt;
 let geselecteerdekamer;

 let allesCorrectIngevuld = true;
 // var die bijhoudt of er ergens een fout is of niet



 // ----------------------------------------
 // 				Controleren
 // ----------------------------------------

 function controleerVoorwaardenVoornaam() {
     if (voornaamTxt.length < 2) {
         document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("voornaam_error").innerHTML = "";
     }
 }

 function controleerVoorwaardenAchternaam() {
     if (achternaamTxt.length < 2) {
         document.getElementById("achternaam_error").innerHTML = "Je achternaam moet minstens 2 letters bevatten!";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("achternaam_error").innerHTML = " ";
     }
 }

 function controleerVoorwaardencheckin() {
     let regEx = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;
     if (regEx.test(checkinTxt) == false) {
         document.getElementById("checkin_error").innerHTML = "Je hebt de datum verkeerd ingevoerd ( dd / mm / jjjj )."
     } else {
         document.getElementById("checkin_error").innerHTML = "";
     }
 }

 function controleerVoorwaardenEmail() {
     let regEx = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,10}$/;
     if (regEx.test(emailTxt) == false) {
         document.getElementById("mail_error").innerHTML = "Je email is niet correct!";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("mail_error").innerHTML = "";
     }
 }


 // ----------------------------------------
 // 	Als op 'versturen' geklikt wordt
 // ----------------------------------------

 function verstuur() {
     voornaamTxt = document.getElementById("voornaam").value;
     achternaamTxt = document.getElementById("achternaam").value;
     emailTxt = document.getElementById("email").value;
     geselecteerdevolwassenen = document.getElementById("volwassenen").selectedIndex;
     volwassenenTxt = document.getElementById("volwassenen").value;
     geselecteerdekinderen = document.getElementById("kinderen").selectedIndex;
     kinderenTxt = document.getElementById("kinderen").value;
     checkinTxt = document.getElementById("checkin").value;
     geselecteerdekamer = document.getElementById("kamer").SelectedIndex;
     kamerTxt = document.getElementById("kamer").value;
     //getElementsByClassName geeft een array van al de elementen






     //Via JS vraag je het element uit de webpagina op met de id voornaam. Van dat element vraag je de value op, de inhoud
     allesCorrectIngevuld = true;
     //als er op de knop geklikt wordt, moet het bijhouden van de fouten gereset worden

     if (voornaamTxt.length == 0) {
         document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
         allesCorrectIngevuld = false;
     } else {
         //aparte functie aanmaken om de voorwaarden te controleren
         controleerVoorwaardenVoornaam()
     }



     if (achternaamTxt.length == 0) {
         document.getElementById("achternaam_error").innerHTML = "Vul in a.u.b."
     } else {
         controleerVoorwaardenAchternaam()
     }


     if (emailTxt.length == 0) {
         document.getElementById("mail_error").innerHTML = "Vul in a.u.b."
     } else {
         controleerVoorwaardenEmail()
     }

     if (geselecteerdevolwassenen == 0) {
         document.getElementById("volwassenen_error").innerHTML = "Kies a.u.b.";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("volwassenen_error").innerHTML = "";
     }

     if (geselecteerdekinderen == 0) {
         document.getElementById("kinderen_error").innerHTML = "Kies a.u.b.";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("kinderen_error").innerHTML = "";
     }



     if (kamerTxt == 0) {
         document.getElementById("kamer_error").innerHTML = "U heeft niets gekozen. ";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("kamer_error").innerHTML = "";
     }

     if (checkin == 0) {
         document.getElementById("checkin_error").innerHTML = "U heeft niets ingevoerd.";
         allesCorrectIngevuld = false;
     } else {
         controleerVoorwaardencheckin()
     }



     //uiteindelijk controleren of alles correct is
     //deze if blijft altijd allerlaatst in de verstuur() functie
     if (allesCorrectIngevuld) {
         document.write("Alles is correct ingevuld");
     }

 } //einde verstuur()