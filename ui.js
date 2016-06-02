
function thead() {
	var $thead = $("<div>").addClass("table-head");
	$thead.append(td("排序: ", "ht_mobile"));
	$thead.append(td("ID", "ht_id"));
	$thead.append(td("名称", "ht_name"));
	$thead.append(td("类型", "ht_type"));
	$thead.append(td("星级", "ht_star"));
	$thead.append(td("弹/粮", "ht_consume"));
	$thead.append(td("血量", "ht_hp"));
	$thead.append(td("伤害", "ht_damage"));
	$thead.append(td("命中", "ht_hit"));
	$thead.append(td("回避", "ht_dodge"));
	$thead.append(td("射速", "ht_firerate"));
	$thead.append(td("输出能力", "ht_attEffect"));
	$thead.append(td("单位输出能力", "ht_avgAttEffect"));
	$thead.append(td("防御能力", "ht_defEffect"));
	$thead.append(td("建造时间", "ht_buildtime"));
	$thead.append(td("BUFF效果", "ht_buffeffect"));
	$thead.append(td("BUFF范围", "ht_buffrange"));
	$thead.append(td("技能效果", "ht_skill"));
	//$thead.append(td("", ""));
	
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
	$row.append(td("NO." + data.id, "td_id"));
	$row.append(td(data.name, "td_name"));
	$row.append(td(data.type, "td_type"));
	$row.append(td(data.star, "td_star"));
	$row.append(td(data.ammunition + "/" + data.forage, "td_consume"));
	$row.append(td(data.hp, "td_hp", "血"));
	$row.append(td(data.damage, "td_damage", "伤"));
	$row.append(td(data.hit, "td_hit", "命"));
	$row.append(td(data.dodge, "td_dodge", "闪"));
	$row.append(td(data.firerate, "td_firerate", "速"));
	$row.append(td(data.attEffect, "td_attEffect", "dps"));
	$row.append(td(data.avgAttEffect, "td_avgAttEffect", "adps"));
	$row.append(td(data.defEffect, "td_defEffect", "def"));
	var time  = Math.floor(data.buildtime/60/60) == 0 ? '' : Math.floor(data.buildtime/60/60) + "小时";
	time += data.buildtime/60%60 == 0 ? "" : data.buildtime/60%60 + "分";
	$row.append(td(time , "td_buildtime"));
	var strbuffeffect = "";
	if(data.buffeffect){
		var effects = data.buffeffect.split(";");
		for(var i in effects){
			var effect = effects[i];
			strbuffeffect += BUFFTYPE[effect.split(",")[0]] + "上升" + effect.split(",")[1] + "%;";
		}
	}
	$row.append(td(data.buffeffecttype + strbuffeffect, "td_buffeffect"));
	
	var buffarea = ["nobuff","nobuff","nobuff","nobuff","buffcenter","nobuff","nobuff","nobuff","nobuff"];
	if(data.buffarea){
		var areas = data.buffarea.split(",");
		for(var i in areas){
			var point = ((areas[i]*1-1) % 3) * 3 + Math.floor((areas[i]*1-1) / 3) + 1;
			buffarea[point-1] = buffarea[point-1].replace("nobuff","isbuff");
		}		
	}
	var $tdBuff = td("", "td_buffrange");
	for(var b in buffarea){
		$tdBuff.append($("<div></div>").addClass(buffarea[b]));
	}
	$row.append($tdBuff);
	$row.append(td(data.skill, "td_skill"));
	//$row.append(td(sciamachyButton(data.name, data.id), 'icon'));
	$row.append(td(buffButton(data.name, data.id, data.buffeffect, data.buffeffecttype), 'icon'));
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
	$sciamachyButton = $("<button>").addClass("glyphicon btn btn-default").text("模拟战");
	$sciamachyButton.click(function () {
		
	});
	return $sciamachyButton;
}

function buffButton(name, id, buffeffect, buffeffecttype){
	$buffButton = $("<button>").addClass("glyphicon btn btn-default").text("BUFF");
	$buffButton.click(function () {
		bufflist.push($(this).parent().parent());
		buffinfo.push({buffeffect, buffeffecttype});
		refreshBufflist();
	});
	return $buffButton;	
}

function refreshBufflist(){
	var $bufflist = $("#bufflist");
	$bufflist.empty();
	for(var i in bufflist){
		var $buff = $("<div></div>").addClass("buff-block");
		$buff.append(bufflist[i].find(".td_buffeffect:first").clone());
		$buff.append(bufflist[i].find(".td_buffrange:first").clone());
		$bufflist.append($buff);
	}	
	calculationGuns();
	drawTable(guns, "table");
}

function clearBufflist(){
	bufflist = [];
	refreshBufflist();
}

function drawTable(data, divId) {
	var $table = $('#' + divId);
	$table.empty();
	$table.append(thead());
	$table.append(list(data));
	
	//排序
	$("#table .table-head .table-td").click(function(){
		var flag = $(this).text().indexOf("V") >= 0;
		var cls = $(this).attr("class");
		var arg = cls.substr(3,cls.indexOf(" ")-3);
		guns.sort(function(a,b){
			if(flag)
				return a[arg]*1 > b[arg]*1 ? 1 : -1;
			return a[arg]*1 > b[arg]*1 ? -1 : 1;
		});
		drawTable(guns, "table");
		if(flag)
			$('#table .' + cls.replace(" ", ".")).text($('#table .' + cls.replace(" ", ".")).text() + " ∧");
		else
			$('#table .' + cls.replace(" ", ".")).text($('#table .' + cls.replace(" ", ".")).text() + " V");
	});
}
