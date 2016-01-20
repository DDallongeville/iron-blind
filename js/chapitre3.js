window.onload = function(){
	var canvas = document.getElementById("canvas");
	var texte = "";
	var temps = 300;
	var bip = new Audio("audio/bip.mp3");
	var porte = new Audio("audio/porte.mp3");
	var alarme = new Audio("audio/alarme.mp3");
	var vocalblind = new VocalBlind();
	responsiveVoice.setDefaultVoice("French Female");
	var timer = setInterval(function(){chapitre3(timer)},1000);
	function chapitre3(timer){
		if(temps == 300)
			vocalblind.tuto9();
		else if(temps > 280){
			canvas.onkeydown = function(evt){
				bip.play();
				if(evt.keyCode != 13)
					texte = key_code2(texte,evt);
				else{
					if(texte == "abizq")
						porte.play();
					else
					{
						alarme.play();
						temps = 0;
					}
				}
			}
		}
		else if(temps < 1)
			clearInterval(timer);
		temps--;
	}
}



function key_code(texte,evt){
	if(evt.keyCode == 13){
		responsiveVoice.speak(texte);
		texte = "";
	}
	else if(evt.keyCode == 32){
		texte = texte + " ";
		responsiveVoice.speak("espace");
	}
	else if(evt.keyCode == 8){
		var i = texte.length;
		responsiveVoice.speak(texte[i-1]);
		texte = texte.slice(0,i-1);
	}
	else if(evt.keyCode == 65){
		texte = texte + "a";
		responsiveVoice.speak("a");
	}
	else if(evt.keyCode == 66){
		texte = texte + "b";
		responsiveVoice.speak("b");
	}
	else if(evt.keyCode == 67){
		texte = texte + "c";
		responsiveVoice.speak("c");
	}
	else if(evt.keyCode == 68){
		texte = texte + "d";
		responsiveVoice.speak("d");
	}
	else if(evt.keyCode == 69){
		texte = texte + "e";
		responsiveVoice.speak("e");
	}
	else if(evt.keyCode == 70){
		texte = texte + "f";
		responsiveVoice.speak("f");
	}
	else if(evt.keyCode == 71){
		texte = texte + "g";
		responsiveVoice.speak("g");
	}
	else if(evt.keyCode == 72){
		texte = texte + "h";
		responsiveVoice.speak("h");
	}
	else if(evt.keyCode == 73){
		texte = texte + "i";
		responsiveVoice.speak("i");
	}
	else if(evt.keyCode == 74){
		texte = texte + "j";
		responsiveVoice.speak("j");
	}
	else if(evt.keyCode == 75){
		texte = texte + "k";
		responsiveVoice.speak("k");
	}
	else if(evt.keyCode == 76){
		texte = texte + "l";
		responsiveVoice.speak("l");
	}
	else if(evt.keyCode == 77){
		texte = texte + "m";
		responsiveVoice.speak("m");
	}
	else if(evt.keyCode == 78){
		texte = texte + "n";
		responsiveVoice.speak("n");
	}
	else if(evt.keyCode == 79){
		texte = texte + "o";
		responsiveVoice.speak("o");
	}
	else if(evt.keyCode == 80){
		texte = texte + "p";
		responsiveVoice.speak("p");
	}
	else if(evt.keyCode == 81){
		texte = texte + "q";
		responsiveVoice.speak("q");
	}
	else if(evt.keyCode == 82){
		texte = texte + "r";
		responsiveVoice.speak("r");
	}
	else if(evt.keyCode == 83){
		texte = texte + "s";
		responsiveVoice.speak("s");
	}
	else if(evt.keyCode == 84){
		texte = texte + "t";
		responsiveVoice.speak("t");
	}
	else if(evt.keyCode == 85){
		texte = texte + "u";
		responsiveVoice.speak("u");
	}
	else if(evt.keyCode == 86){
		texte = texte + "v";
		responsiveVoice.speak("v");
	}
	else if(evt.keyCode == 87){
		texte = texte + "w";
		responsiveVoice.speak("w");
	}
	else if(evt.keyCode == 88){
		texte = texte + "x";
		responsiveVoice.speak("x");
	}
	else if(evt.keyCode == 89){
		texte = texte + "y";
		responsiveVoice.speak("y");
	}
	else if(evt.keyCode == 90){
		texte = texte + "z";
		responsiveVoice.speak("z");
	}
	return texte;
}

function key_code2(texte,evt){
	if(evt.keyCode == 13){
		texte = "";
	}
	else if(evt.keyCode == 32){
		texte = texte + " ";
		
	}
	else if(evt.keyCode == 8){
		var i = texte.length;
		
		texte = texte.slice(0,i-1);
	}
	else if(evt.keyCode == 65){
		texte = texte + "a";
		
	}
	else if(evt.keyCode == 66){
		texte = texte + "b";
	}
	else if(evt.keyCode == 67){
		texte = texte + "c";
		
	}
	else if(evt.keyCode == 68){
		texte = texte + "d";
		
	}
	else if(evt.keyCode == 69){
		texte = texte + "e";
		
	}
	else if(evt.keyCode == 70){
		texte = texte + "f";
		
	}
	else if(evt.keyCode == 71){
		texte = texte + "g";
		
	}
	else if(evt.keyCode == 72){
		texte = texte + "h";
		
	}
	else if(evt.keyCode == 73){
		texte = texte + "i";
		
	}
	else if(evt.keyCode == 74){
		texte = texte + "j";
		
	}
	else if(evt.keyCode == 75){
		texte = texte + "k";
		
	}
	else if(evt.keyCode == 76){
		texte = texte + "l";
		
	}
	else if(evt.keyCode == 77){
		texte = texte + "m";
		
	}
	else if(evt.keyCode == 78){
		texte = texte + "n";
		
	}
	else if(evt.keyCode == 79){
		texte = texte + "o";
		
	}
	else if(evt.keyCode == 80){
		texte = texte + "p";
		
	}
	else if(evt.keyCode == 81){
		texte = texte + "q";
		
	}
	else if(evt.keyCode == 82){
		texte = texte + "r";
		
	}
	else if(evt.keyCode == 83){
		texte = texte + "s";
		
	}
	else if(evt.keyCode == 84){
		texte = texte + "t";
		
	}
	else if(evt.keyCode == 85){
		texte = texte + "u";
		
	}
	else if(evt.keyCode == 86){
		texte = texte + "v";
		
	}
	else if(evt.keyCode == 87){
		texte = texte + "w";
		
	}
	else if(evt.keyCode == 88){
		texte = texte + "x";
		
	}
	else if(evt.keyCode == 89){
		texte = texte + "y";
		
	}
	else if(evt.keyCode == 90){
		texte = texte + "z";
		
	}
	return texte;
}