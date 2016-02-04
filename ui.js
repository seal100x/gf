
function thead() {
	var $thead = $("<div>").addClass("table-head");
	$thead.append(td("名称", "ht_name"));
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
	$row.append(td(data.name, ''));
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
	$sciamachyButton = $("<button>").addClass("glyphicon glyphicon-shopping-cart btn btn-default");
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
