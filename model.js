
var typeToChinese = ["手枪", "冲锋枪", "突击步枪", "步枪", "机枪"];

Guns = function (data) {
	return {
		id : data[0],
		name : data[1],
		type : typeToChinese[data[3]-1],
		star : data[4],
		ammunition : data[7],
		forage : data[8],
		attEffect : 0,
		avgAttEffect : 0,
		defEffect : 0,
		hpRatio : data[6],
		hp : 0,
		damageRatio : data[9],
		damage : 0,
		hitRatio : data[10],
		hit : 0,
		dodgeRatio : data[11],
		dodge : 0,
		firerateRatio : data[14],
		firerate : 0,
		eatRatio : data[20],
		crit : data[15],
		buildtime : data[21],
		buffeffect : data[25],
		buffarea : data[24],
		skill1 : data[26],
		skill2 : "",
		calc : function(fliter){
			var addLevel = fliter["gun-level"] * 1 - 1;
			var ratio = RATIO[this.type];
			
			this.hp = Math.ceil((NUM["life"] + addLevel * NUM2["life"]) * ratio["life"] * this.hpRatio / NUM3["life"]);
	
			var damageBase = NUM["basepow"] * ratio["pow"] * this.damageRatio / NUM2["basepow"];
			var damageAdd = addLevel * NUM["pow"] * ratio["pow"] * this.damageRatio * this.eatRatio / NUM2["pow"] / NUM3["pow"];
			this.damage = Math.ceil(damageBase) + Math.ceil(damageAdd);
			
			var hitBase = NUM["basehit"] * ratio["hit"] * this.hitRatio / NUM2["basehit"];
			var hitAdd = addLevel * NUM["hit"] * ratio["hit"] * this.hitRatio * this.eatRatio / NUM2["hit"] / NUM3["hit"];
			this.hit = Math.ceil(hitBase) + Math.ceil(hitAdd);
			
			var dodgeBase = NUM["basedodge"] * ratio["dodge"] * this.dodgeRatio / NUM2["basedodge"];
			var dadgeAdd = addLevel * NUM["dodge"] * ratio["dodge"] * this.dodgeRatio * this.eatRatio / NUM2["dodge"] / NUM3["dodge"];
			this.dodge = Math.ceil(dodgeBase) + Math.ceil(dadgeAdd);
			
			var firerateBase = NUM["baserate"] * ratio["rate"] * this.firerateRatio / NUM2["baserate"];
			var firerateAdd = addLevel * NUM["rate"] * ratio["rate"] * this.firerateRatio * this.eatRatio / NUM2["rate"] / NUM3["rate"];
			this.firerate = Math.ceil(firerateBase) + Math.ceil(firerateAdd);
			
			var hitRateAtt = BATTLE_NUM4 * this.hit / (fliter["enemy-dodge"] * 1 + BATTLE_NUM4 * this.hit)
			this.attEffect = this.damage / (50/this.firerate) * hitRateAtt * (1 + this.crit/100 * 0.5);
			if(this.type == "机枪")
				this.attEffect = this.damage / (4 + 200/this.firerate) * 10 * hitRateAtt * (1 + this.crit/100 * 0.5);
			this.attEffect = this.attEffect.toFixed(1);
			this.avgAttEffect = this.attEffect / (this.ammunition * 0.06 + this.forage * 0.05);
			this.avgAttEffect = this.avgAttEffect.toFixed(1);
			var hitRateDef = BATTLE_NUM4 * fliter["enemy-hit"] * 1 / (this.dodge + BATTLE_NUM4 * fliter["enemy-hit"] * 1);
			this.defEffect = (this.hp * (1 + (1-hitRateDef))).toFixed(1);
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
