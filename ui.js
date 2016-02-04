
function thead() {
	var $thead = $("<div>").addClass("table-head");
	$thead.append(td("ID", "ht_id"));
	$thead.append(td("名称", "ht_name"));
	$thead.append(td("类型", "ht_type"));
	$thead.append(td("系统数据", "ht_abilityRank"));
	$thead.append(td("血量", "ht_HP"));
	$thead.append(td("弹药", "ht_ammunition"));
	$thead.append(td("军粮", "ht_forage"));
	$thead.append(td("伤害", "ht_damage"));
	$thead.append(td("命中", "ht_hit"));
	$thead.append(td("回避", "ht_dodge"));
	$thead.append(td("移速", "ht_speed"));
	$thead.append(td("射速", "ht_firerate"));
	$thead.append(td("建造时间", "ht_buildtime"));
	$thead.append(td("技能效果", "ht_skilleffect"));
	$thead.append(td("技能范围", "ht_skillrange"));
	
	$td_nbsp = td("", "");
	$td_nbsp = td("回到顶部", "th_gotop");
	$td_nbsp.addClass("gogogo-top");
	$td_nbsp.click(function () {
		goTop();
	});
	$thead.append($td_nbsp);
	
	return $thead;
}

function td(data, cls, beforeText) {
	return $("<div>").addClass(cls).addClass("table-td").attr("before-text", beforeText).append(data);
}

function row(data) {
	var $row = $("<div>").addClass("table-row");
	$row.append(td(data.id, "td_id"));
	$row.append(td(data.name, "td_name"));
	$row.append(td(data.type, "td_type"));
	$row.append(td(data.abilityRank.join(""), "td_abilityRank"));
	$row.append(td(data.HP, "td_HP"));
	$row.append(td(data.ammunition, "td_ammunition"));
	$row.append(td(data.forage, "td_forage"));
	$row.append(td(data.damage, "td_damage"));
	$row.append(td(data.hit, "td_hit"));
	$row.append(td(data.dodge, "td_dodge"));
	$row.append(td(data.speed, "td_speed"));
	$row.append(td(data.firerate, "td_firerate"));
	$row.append(td(data.buildtime, "td_buildtime"));
	$row.append(td(data.skilleffect, "td_skilleffect"));
	
	var skillarea = "";
	for(var i in data.skillrange){
		skillarea += data.skillrange[i].replace("1","■").replace("0","□");
		if(i%3 == 2)
			skillarea+="<br>";
	}
	$row.append(td(skillarea, "td_skillrange"));
	$row.append(td(sciamachyButton(data.name, data.id), 'icon'));
	return $row;
}

function list(datas) {
	var $list = $("<div>").addClass("table-body");
	for (var i in datas) {
		$list.append(row(datas[i]));
	}
	return $list;
}

function sciamachyButton(name, id) {
	$sciamachyButton = $("<button>").addClass("glyphicon glyphicon-screenshot btn btn-default");
	$sciamachyButton.click(function () {
		
	});
	return $sciamachyButton;
}

function drawTable(data, divId) {
	var $table = $('#' + divId);
	$table.empty();
	$table.append(thead());
	$table.append(list(data));
}
