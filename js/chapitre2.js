window.onload = function(){
	
	var temps = 120;
	var canvas = document.getElementById("canvas");
	var vent = new SeamlessLoop();
	var avion = new Audio("audio/avion.mp3");
	var eviter = new Audio("audio/balle_qui_passe.mp3");
	var vocalblind = new VocalBlind();
	var tirer = 0;
	var attention = 0;
	var tir = new Audio("audio/laser.mp3");
	var explosion = new Audio("audio/explosion2.mp3");
	vent.addUri("audio/vent2.mp3",12000,"vent");
	vent.start("vent");
	function chapitre2(timer){
		if(temps == 115)
			avion.play();
		else if(temps == 112){
			vocalblind.gauche();
		}
		else if(temps == 111 || temps == 110){
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 37){
					eviter.play();
					setTimeout(eviter.play(),500);
					setTimeout(eviter.play(),1000);
					attention = 1;
				}
			}
			if(attention == 0 && temps == 110)
				temps = 0;
			else if(attention == 1 && temps == 110)
				attention = 0;
		}
		else if(temps == 107)
			vocalblind.cible_verrouillee();
		else if(temps == 106 || temps == 105){
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 84){
					tir.play();
					setTimeout(explosion.play(),2000);
					tirer = 1;
				}
			}
			if(tirer == 0 && temps == 105)
				temps = 0;
			else if(tirer == 1 && temps == 105)
				tirer = 0;
		}
		else if(temps < 1)
			clearInterval(timer);
		temps--;
		console.log(temps);
	}
	var timer = setInterval(function(){chapitre2(timer)},1000);
}