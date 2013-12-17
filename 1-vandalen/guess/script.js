"use strict";

window.onload = function(){
	
	var secret = Math.floor((Math.random()*100)+1);
	var count = 0;
	
	var guess = function(number){


		console.log("Du gissade: " + number);
		console.log("Det hemliga talet är: " + secret); // Denna skulle gå att ta bort så at folk inte kan fuska genom console
		
            if (number > 100 || number < 0 || !number){
                return [false, "Talet är utanför intervallet 0 - 100"];
            }
            else if(isNaN(number)){
                return [false, "Det hemliga talet är ett tal, inte ett ord... Eller vad det där nu skulle föreställa!?"];
            }
            count+=1;
            if (number < secret){
                return [false, "Det hemliga talet är högre!"];
            }
            else if (number > secret){
                return [false, "Det hemliga talet är lägre!"];
            }
            else if (number == secret){
                return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
            }
       
//räknare av antal test

//test om talet är ==       / [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]

//test om talet är <        / [false, "Det hemliga talet är högre!"]

//test om talet är >        / [false, "Det hemliga talet är lägre!"]

//test om talet är ><       / [false, "Talet är utanför intervallet 0 - 100"]

	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value);    // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];            // Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};