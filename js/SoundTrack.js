function SoundTrack(){
	this._marche = new Audio("audio/marche.mp3");
	this._courir = new Audio("audio/courir.mp3");
	this._respiration = new Audio("audio/respiration.mp3");
	this._loop = new SeamlessLoop();
	this._explosion = new Audio("audio/explosion.mp3");
	this._cri = new Audio("audio/cri.mp3");
	this._feu = new SeamlessLoop();
	this._femme = new SeamlessLoop();
	this._ennemi = new Audio("audio/ak47.mp3");
	this._tir = new Audio("audio/laser.mp3");
	this._explosion2 = new Audio("audio/explosion2.mp3");
	this._agonie = new Audio("audio/game_over.mp3");
	this._compteur = 0;
	this._decompteur = 0;
	this._vie = 5;
	this._impact = new Audio("audio/impact.mp3");
	this._douleur = new Audio("audio/mal.mp3");
	this._protection = 0;
	this._reacteur1 = new Audio("audio/reacteur.mp3");
	this._reacteur2 = new Audio("audio/reacteur2.mp3");
	this._cible_verrouillee = new Audio("audio/cible_verrouillee.mp3");
	this._vocalblind = new VocalBlind();
	this._j = 0;
	this._droite = new Audio("audio/droite.mp3");
	this._gauche = new Audio("audio/gauche.mp3");
	this._tout_droit = new Audio("audio/tout_droit.mp3");
	this._derriere = new Audio("audio/derriere.mp3");
	
	SoundTrack.prototype.game_over = function(){
		this._decompteur = 0;
		this._loop.stop();
		this._agonie.play();
		
	}
	
	SoundTrack.prototype.decollage = function(evt){
		if(evt.keyCode == 68){
			var that = this;
			this._reacteur1.play();
			setTimeout(function(){that._reacteur2.play()},2500);
			setTimeout(function(){that._loop.stop()},4500);
			this._vie = 0;
		}
	}
	
	SoundTrack.prototype.get_vie = function(){
		return this._vie;
	}
	SoundTrack.prototype.get_decompte = function(){
		return this._decompteur;
	}
	
	SoundTrack.prototype.get_compte = function(){
		return this._compteur;
	}
	
	SoundTrack.prototype.protection = function(p){
		this._protection = p;
	}
	
	SoundTrack.prototype.decompte = function(timer, vie){
		console.log("seconde" + this._decompteur)
		if(this._decompteur % 5 == 0 && this._decompteur != 0){
			var that = this;
			this._ennemi.play();
			console.log("tir");
			if(this._protection == 0){
				this._douleur.play();
				this._vie--;
			}
			if(this._vie == 0)
				that.game_over();
			console.log("vie : " + this._vie);
		}
		if(this._decompteur % 5 == 2 && this._decompteur > 0){
			this._cible_verrouillee.play();
		}
		if(this._decompteur <= 0)
			clearInterval(timer);
		this._decompteur--;
	}
	
	SoundTrack.prototype.decompteur = function(decompteur){
		this._decompteur = decompteur;
	}
	
	SoundTrack.prototype.vent = function(){
		this._loop.addUri('audio/vent.mp3', 10000, "sound1");
		this._loop.start("sound1");
	}
	
	SoundTrack.prototype.compteur = function(compte){
		this._compteur = compte;
	}
	
	SoundTrack.prototype.explosion = function(){
		this._explosion.play();
	}
	
	SoundTrack.prototype.marche_courir = function(evt, i){
		evt = evt || window.event;
		if(evt.keyCode == 67){
			this._courir.play();
			this._respiration.play();
			i++
		}
		return i;
	}
	
	SoundTrack.prototype.marche_courir_pause = function(evt){
		evt = evt || window.event;
		if(evt.keyCode == 67){
			this._courir.pause();
			this._respiration.pause();
		}
		if(evt.keyCode == 37 || evt.keyCode == 39)
			this._marche.pause();
	}
	
	SoundTrack.prototype.cri = function(){
		this._cri.play();
	}
	
	SoundTrack.prototype.ch1_2 = function(i, chapitre, evt){
		if(i == 280 || i == 251){
			this._feu.addUri('audio/feu.mp3', 10000, "sound1");
			this._femme.addUri('audio/femme.mp3', 10000, "sound1");
			this._feu.start("sound1");
			this._femme.start("sound1");
			this._vocalblind.tuto3();
		}
		if(i > 251){
			if(evt.keyCode == 39 && this._j < 7){
				this._j++;
				this._marche.play();
			}
			else if(evt.keyCode == 37 && this._j > 0){
				this._j--;
				this._marche.play();
			}
			else if(evt.keyCode == 39 && this._j == 7){
				this._j = 0;
				this._marche.play();
			}
			else if(evt.keyCode == 37 && this._j == 0){
				this._j = 7;
				this._marche.play();
			}
			
			if(this._j == 0 || this._j == 1)
				this._droite.play();
			else if(this._j == 2)
				this._tout_droit.play()
			else if(this._j == 3 || this._j == 4)
				this._gauche.play();
			else if(this._j == 5 || this._j == 6 || this._j == 7)
				this._derriere.play();
		}
		if(i == 500 || i == 501){
			this._feu.stop();
			this._femme.stop();
		}
		if(i > 500 && this._j == 2) {
			chapitre = 2;
			this._marche.pause();
			this._courir.pause();
			this._respiration.pause();
			this._vocalblind.tuto4();
		}
		return chapitre;
	}
	
	SoundTrack.prototype.clear_ennemi = function(){
		this._ennemi.stop();
	}
	
	SoundTrack.prototype.tir = function(evt, ennemi){
		var that = this;
		evt = evt || window.event;
		if(evt.keyCode == 84){
			this._tir.play();
			this._explosion2.play();
			if(this._decompteur % 5 >= 1)
				ennemi--;
		}
		else if(evt.keyCode == 40){
			this._protection = 1;
			if(this._decompteur % 5 == 0){
				
				console.log("test");
				var that = this;
				setTimeout(function(){that._impact.play()},1000);
				setTimeout(function(){that._impact.play()},1250);
				setTimeout(function(){that._impact.play()},1500);
			}
		}
		return ennemi;
	}
}