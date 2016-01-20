window.onload = function() {
	var vie = 5;
	const canvas = document.getElementById('canvas');
	const vocalblind = new VocalBlind();
	const sound = new SoundTrack();
	var i = 0;
	var ennemi = 3;
	var chapitre = 1;
	var n_interval = 0;
	var bouclier = new Audio("audio/bouclier.mp3");
	var personnage = new Personnage();
	responsiveVoice.setDefaultVoice("French Female");
	responsiveVoice.speak("Appuyer sur tabulation pour entrer dans la fenetre de jeu.");
	
	sound.vent();
	setTimeout(function(){vocalblind.tuto()}, 5000);
	setTimeout(function(){sound.explosion()}, 15000);
	setTimeout(function(){sound.cri()}, 17000);
	setTimeout(function(){personnage.personnage1()}, 20000);
	setTimeout(vocalblind.tuto2, 22000);
		canvas.onkeydown = function(evt) {
			if(sound.get_vie() > 0){
				if(chapitre == 1){
					i = sound.marche_courir(evt, i);
					i++;
					chapitre = sound.ch1_2(i, chapitre, evt);
				}
				else if(chapitre == 2){
					if(ennemi == 1){
						ennemi = sound.tir(evt, ennemi);
					}
					else
						ennemi = sound.tir(evt, ennemi);
				}
				else if(chapitre == 3){
					sound.decollage(evt);
				}
			}
		};
		canvas.onkeyup = function(evt){
			if(sound.get_vie() > 0){
				if(chapitre == 1)
					sound.marche_courir_pause(evt);
				else if(chapitre == 2){
					if(ennemi > 0){
						if(evt.keyCode == 84 || evt.keyCode == 67){
							if(ennemi == 3){
								sound.decompteur(10000000000);
								setTimeout(function(){var timer = setInterval(function(){sound.decompte(timer)}, 1000)},10000);
							}
						}
						else if(evt.keyCode == 40)
							sound.protection(0);
							bouclier.play();
					}
					else if(ennemi == 0){
								sound.decompteur(0);
								vocalblind.tuto5();
								chapitre++;
							}
				}
			}
			else
		setTimeout(function(){window.location.href = "chapitre2.html"},5000);
			
		}
}