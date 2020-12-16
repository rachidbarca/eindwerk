 "use strict"
 let voornaamTxt;
 let achternaamTxt;
 let emailTxt;
 let geselecteerdevolwassenen;
 let volwassenenTxt;
 let geselecteerdekinderen;
 let kinderenTxt;
 let checkinTxt;
 let checkoutTxt;
 let kamerTxt;
 let geselecteerdekamer;

 let allesCorrectIngevuld = true;






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

 function controleerVoorwaardencheckout() {
     let regEx = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;
     if (regEx.test(checkinTxt) == false) {
         document.getElementById("checkout_error").innerHTML = "Je hebt de datum verkeerd ingevoerd ( dd / mm / jjjj )."
     } else {
         document.getElementById("checkout_error").innerHTML = "";
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


 function verstuur() {
     voornaamTxt = document.getElementById("voornaam").value;
     achternaamTxt = document.getElementById("achternaam").value;
     emailTxt = document.getElementById("email").value;
     geselecteerdevolwassenen = document.getElementById("volwassenen").selectedIndex;
     volwassenenTxt = document.getElementById("volwassenen").value;
     geselecteerdekinderen = document.getElementById("kinderen").selectedIndex;
     kinderenTxt = document.getElementById("kinderen").value;
     checkinTxt = document.getElementById("checkin").value;
     checkoutTxt = document.getElementById("checkout").value;
     geselecteerdekamer = document.getElementById("kamer").SelectedIndex;
     kamerTxt = document.getElementById("kamer").value;


     allesCorrectIngevuld = true;

     if (voornaamTxt.length == 0) {
         document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
         allesCorrectIngevuld = false;
     } else {

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
     if (checkout == 0) {
         document.getElementById("checkout_error").innerHTML = "U heeft niets ingevoerd.";
         allesCorrectIngevuld = false;
     } else {
         controleerVoorwaardencheckout()
     }



     if (allesCorrectIngevuld) {
         document.write("Alles is correct ingevuld");
         let mailer = "mailto:" + encodeURIComponent("surinx_jordy@outlook.com") +
             "?cc=" + encodeURIComponent("") +
             "&subject=" + encodeURIComponent(`${kamerTxt} geboekt door ${achternaamTxt} ${voornaamTxt}`) +
             "&body=" +
             "voornaam:" +
             encodeURIComponent(voornaamTxt) +
             encodeURIComponent("\r\n\n") +
             "achternaam:" +
             encodeURIComponent(achternaamTxt) +
             encodeURIComponent("\r\n\n") +
             "email:" +
             encodeURIComponent(emailTxt) +
             encodeURIComponent("\r\n\n") +
             "Aantal volwassenen:" +
             encodeURIComponent(volwassenenTxt) +
             "Aantal kinderen:" +
             encodeURIComponent(kinderenTxt) +
             encodeURIComponent("\r\n\n") +
             "Check in:" +
             encodeURIComponent(checkinTxt) +
             encodeURIComponent("\r\n\n") +
             "Check out:" +
             encodeURIComponent(checkoutTxt) +
             encodeURIComponent("\r\n\n") +
             "Suite:" +
             encodeURIComponent(kamerTxt) +
             encodeURIComponent("\r\n\n") 
         window.location.href = mailer;
     }

 }