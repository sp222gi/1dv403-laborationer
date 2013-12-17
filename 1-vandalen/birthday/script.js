"use strict";

window.onload = function(){

	var birthday = function(date){
        if(!Date.parse(date.toString())){
            throw new Error("fel");
            
        }
        //här görs de om till ett format som t.ex kan se ut:
        //Wed Nov 20 2013 01:00:00 GMT+0100 (W. Europe Standard Time)
        var today = new Date();
        var bigDay = new Date(date);
            
        bigDay.setFullYear(2013);
            console.log("Din födelsedag i år: " + bigDay);
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
            console.log("Dagens Datum: " + today);
        
        //här anges antal ms per dag
            var msPerDay = 24 * 60 * 60 * 1000 ;
        
        //här räknas den återstående tiden ut i ms
        var timeLeft = (bigDay.getTime() - today.getTime());
        
        //här räknas det ungefärliga antalet dagar kvar
        var e_daysLeft = timeLeft / msPerDay;
            
        //här avrundas antal dagar kvar
        var daysLeft = Math.floor(e_daysLeft);
        
        //här läggs en ny viktig variabel till
        var correctDaysLeft = daysLeft+365;
        
        //här kollas det om den viktiga variablen behövs eller ej
        if (daysLeft < 0){
            console.log(correctDaysLeft);
            return (correctDaysLeft);
        }
        else if (daysLeft >= 0){
            console.log(daysLeft);
            return (daysLeft);
        }
        else{
            throw new Error("Det verkar orimligt att detta ör ditt födelsedatum");
        }
	};

	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});
};