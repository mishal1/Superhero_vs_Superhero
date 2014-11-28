function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.winner = function() {
	if(this.player1.pick === this.player2.pick) {return null}

	if (this._superheroMove(this.player1.pick, this.player2.pick)) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype.RULES = {
	 	'Iron Man':  { 'Spiderman': 'vaporises', 'Black Widow': 'breaks' },
	 	'Hulk': { 'Iron Man': 'smashes', 'Thor': 'crushes' },
	 	'Black Widow': { 'Thor': 'seduces', 'Hulk': 'ass kicks' },
	 	'Thor': { 'Iron Man': 'annihilates', 'Spiderman': 'defeats'  },
	 	'Spiderman': { 'Hulk': 'fires at', 'Black Widow': 'shoots' }
};

Game.prototype._superheroMove = function(pick, opponentPick) {
	return this.RULES[pick][opponentPick];
};

Game.prototype.winningMessage = function() {
	var result;
	if(this.winner()) {
		result=[this.message(),
		this.winner().pick,
		this._victoryVerb(this.winner().pick, this.loser().pick),
		this.loser().pick].join(' ');
	} else {
		result = "DRAW";
	}

	return result;
};

Game.prototype.loser = function() {
	return (this.winner() === this.player1 ? this.player2 : this.player1);
};

Game.prototype._victoryVerb = function(pick, opponentPick) {
	return this.RULES[pick][opponentPick];
};

Game.prototype.computer = function() {
	var random = ["Iron Man", "Hulk", "Black Widow", "Thor", "Spiderman"];
	var opponentPick = random[Math.floor(Math.random()*random.length)];
	return opponentPick;
};

Game.prototype.message = function() {
	if(this.winner() === this.player1){
		return "YOU WIN!      "
	} else {
		return "YOU LOSE!      "
	}
};

