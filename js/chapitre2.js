window.onload = function(){
	
	var temps = 150;
	var canvas = document.getElementById("canvas");
	var vent = new SeamlessLoop();
	var avion = new Audio("audio/avion.mp3");
	var eviter = new Audio("audio/balle_qui_passe.mp3");
	var alerte = new Audio("audio/alerte.mp3");
	var missile = new Audio("audio/missile.mp3");
	var vocalblind = new VocalBlind();
	var personnage = new Personnage();
	var ami = new Ami();
	var tirer = 0;
	var attention = 0;
	var tir = new Audio("audio/laser.mp3");
	var explosion = new Audio("audio/explosion2.mp3");
	var explosion2 = new Audio("audio/explosion2.mp3");
	var reacteur = new Audio("audio/reacteur.mp3");
	var reacteur2 = new Audio("audio/reacteur2.mp3");
	var fin = 0;
	vent.addUri("audio/vent2.mp3",12000,"vent");
	vent.start("vent");
	function chapitre2(timer){
		if(temps == 150)
			personnage.sonnerie();
		else if(temps == 145)
			personnage.personnage4();
		else if(temps == 142)
			personnage.personnage5();
		else if(temps == 141)
			ami.ami3();
		else if(temps == 134)
			personnage.personnage7();
		else if(temps == 130)
			ami.ami4();
		else if(temps == 127)
			personnage.personnage8();
		else if(temps == 120)
			vocalblind.tuto6();
		else if(temps == 110)
			avion.play();
		else if(temps == 109 || temps == 106 || temps == 103 || temps == 100 || temps == 97 || temps == 91 || temps == 86 || temps == 74 || temps == 71 || temps == 67 || temps == 64 || temps == 59 || temps == 56)
			alerte.play();
		else if(temps == 108 || temps == 90 || temps == 66){
			vocalblind.gauche();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 37 && (temps == 108 || temps == 107 || temps == 90 || temps == 89 || temps == 66 || temps == 65)){
					eviter.play();
					attention = 1;
				}
			}
		}
		else if(attention == 0 && (temps == 107 || temps == 89 || temps == 65)){
			temps = 0;
			explosion2.play();
		}
		else if(attention == 1 && (temps == 107 || temps == 89 || temps == 65))
			attention = 0;
		else if(temps == 105 || temps == 70 || temps == 63 || temps == 55){
			vocalblind.cible_verrouillee();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 84 && (temps == 105 || temps == 104 || temps == 70 || temps == 69 || temps == 63 || temps == 62 || temps == 55 || temps == 54)){
					tir.play();
					setTimeout(explosion.play(),2000);
					tirer = 1;
				}
			}
		}
		else if(tirer == 0 && (temps == 104 || temps == 69 || temps == 62 || temps == 54)){
			temps = 0;
			alerte.play();
			setTimeout(explosion2.play(),2000);
		}
		else if(tirer == 1 && (temps == 104 || temps == 69 || temps == 62 || temps == 54))
			tirer = 0;
		else if(temps == 102 || temps == 58){
			vocalblind.descendez();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 40 && (temps == 102 || temps == 101 || temps == 58 || temps == 57)){
					missile.play();
					attention = 1;
				}
			}
		}
		else if(attention == 0 && (temps == 101 || temps == 57)){
			temps = 0;
			explosion2.play();
		}
		else if(attention == 1 && (temps == 101 || temps == 57))
			attention = 0;
		else if(temps == 99){
			vocalblind.montez();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 38 && (temps == 99 || temps == 98)){
					eviter.play();
					attention = 1;
				}
			}
		}
		else if(attention == 0 && temps == 98){
			temps = 0;
			explosion2.play();
		}
		else if(attention == 1 && temps == 98)
			attention = 0;
		else if(temps == 96 || temps == 73){
			vocalblind.droite();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 39 && (temps == 96 || temps == 95 || temps == 73 || temps == 72)){
					missile.play();
					attention = 1;
				}
			}
		}
		else if(attention == 0 && (temps == 95 || temps == 72)){
			temps = 0;
			explosion2.play();
		}
		else if(attention == 1 && (temps == 95 || temps == 72))
			attention = 0;
		else if(temps == 85){
			vocalblind.accelerer();
			canvas.onkeydown = function(evt){
				if(evt.keyCode == 65 && (temps == 85 || temps == 84)){
					reacteur.play();
					setTimeout(function(){reacteur2.play()},2000);
					attention = 1;
				}
			}
		}
		else if(attention == 0 && temps == 84){
			temps = 0;
			explosion2.play();
		}
		else if(attention == 1 && temps == 84)
			attention = 0;
		else if(temps == 80)
			vocalblind.tuto7();
		else if(temps == 50)
			vocalblind.tuto8();
		else if(temps == 45){
			temps = 0;
			fin = 1;
		}
		else if(temps < 1){
			vent.stop();
			clearInterval(timer);
			if(fin == 1)
				window.location.href = "chapitre3.html";
			else
				window.location.href = "chapitre2.html";
		}
		temps--;
		console.log(temps);
	}
	var timer = setInterval(function(){chapitre2(timer)},1000);
}