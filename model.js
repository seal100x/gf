Guns = function (data) {
	return {
		id : data[0],
		name : data[1],
		type : data[2],
		star : data[3],
		damageRank : data[4],
		hitRank : data[5],
		dodgeRank : data[6],
		firerateRank : data[7],
		HPRank : data[8],
		abilityRank : data[9],
		HP : data[10],
		ammunition : data[11],
		forage : data[12],
		damage : data[13],
		attEffect : 0,
		defEffect : 0,
		hit : data[14],
		dodge : data[15],
		speed : data[16],
		firerate : data[17],
		buildtime : data[18],
		buffeffect : data[19],
		buffarea : data[20],
		skill : data[21],
		calc : function(fliter){
			this.attEffect = (this.damage * this.firerate * Math.log(this.hit) / Math.log(fliter["enemy-dodge"])).toFixed(2);
		}
	}
}

var guns = function() {
  var ret = [];
  for (var i in gunsData) {
    ret.push(Guns(gunsData[i]));
  }
  return ret;
}();

function calculationGuns(){
	for (var i in guns) {
		guns[i].calc(fliter);
	}
}