 "use strict"
 let voornaamTxt;
 let achternaamTxt;
 let emailTxt;
 let onderwerpTxt;
 let berichtTxt;

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

 function controleerVoorwaardenEmail() {
     let regEx = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,10}$/;
     if (regEx.test(emailTxt) == false) {
         document.getElementById("mail_error").innerHTML = "Je email is niet correct!";
         allesCorrectIngevuld = false;
     } else {
         document.getElementById("mail_error").innerHTML = "";
     }
 }
function controleerVoorwaardenOnderwerp() {
    if (onderwerpTxt.length < 2) {
        document.getElementById("onderwerp_error").innerHTML = "Minstens 2 karakters lang!";
         allesCorrectIngevuld = false;
    }
    else {
        document.getElementById("onderwerp_error").innerHTML = "";
    }
}
function controleerVoorwaardenBericht() {
if (berichtTxt.length <= 9) {
    document.getElementById("bericht_error").innerHTML = "U moet minstens 10 karakters gebruiken om uw vraag te stellen.";
    allesCorrectIngevuld = false; 
}
else {
    document.getElementById("bericht_error").innerHTML = "";
}
}
 function verstuur() {
     voornaamTxt = document.getElementById("voornaam").value;
     achternaamTxt = document.getElementById("achternaam").value;
     emailTxt = document.getElementById("email").value;
     onderwerpTxt = document.getElementById("onderwerp").value;
     berichtTxt = document.getElementById("bericht").value;


     allesCorrectIngevuld = true;

     if (voornaamTxt.length == 0) {
         document.getElementById("voornaam_error").innerHTML = "U heeft niets ingevuld.";
         allesCorrectIngevuld = false;
     } else {

         controleerVoorwaardenVoornaam()
     }



     if (achternaamTxt.length == 0) {
         document.getElementById("achternaam_error").innerHTML = "U heeft niets ingevuld."
         allesCorrectIngevuld = false;
     } else {
         controleerVoorwaardenAchternaam()
     }


     if (emailTxt.length == 0) {
         document.getElementById("mail_error").innerHTML = "U heeft niets ingevuld."
         allesCorrectIngevuld = false;
     } else {
         controleerVoorwaardenEmail()
     }

    if (onderwerpTxt == 0) {
        document.getElementById("onderwerp_error").innerHTML = "U heeft niets ingevuld."
        allesCorrectIngevuld = false;
    }
    else {
        controleerVoorwaardenOnderwerp()
    }
    if (berichtTxt == 0) {
        document.getElementById("bericht_error").innerHTML = "U heeft niets ingevuld." 
        allesCorrectIngevuld = false;
    }
    else {
        controleerVoorwaardenBericht()
    }

     if (allesCorrectIngevuld) {
         document.getElementById("correctomundo").innerHTML = "Bericht is verstuurd.";
         let mailer = "mailto:" + encodeURIComponent("surinx_jordy@outlook.com") +
             "?cc=" + encodeURIComponent("") +
             "&subject=" + encodeURIComponent(`${onderwerpTxt}`) +
             "&body=" +
             "voornaam:" +
             encodeURIComponent("\r\n\n") +
             encodeURIComponent(voornaamTxt) +
             encodeURIComponent("\r\n\n") +
             "achternaam:" +
             encodeURIComponent("\r\n\n") +
             encodeURIComponent(achternaamTxt) +
             encodeURIComponent("\r\n\n") +
             "email:" +
             encodeURIComponent("\r\n\n") +
             encodeURIComponent(emailTxt) +
             encodeURIComponent("\r\n\n") +
             "Onderwerp:" +
             encodeURIComponent("\r\n\n") +
             encodeURIComponent(onderwerpTxt) +
             encodeURIComponent("\r\n\n") +
             "Bericht:" +

             encodeURIComponent("\r\n\n") +
             encodeURIComponent(berichtTxt)

         window.location.href = mailer;
     }

 }