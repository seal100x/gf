Guns = function (data) {
	return {
		id : data[0],
		name : data[1],
		type : data[2],
		abilityRank : data[3].split(""),
		HP : data[4],
		ammunition : data[5],
		forage : data[6],
		damage : data[7],
		hit : data[8],
		dodge : data[9],
		speed : data[10],
		firerate : data[11],
		buildtime : data[12],
		skilleffect : data[13].split(","),
		skillrange : data[14].split(""),
	}
}

var guns = function() {
  var ret = [];
  for (var i in gunsData) {
    ret.push(Guns(gunsData[i]));
  }
  return ret;
}();