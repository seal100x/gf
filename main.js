var fliter = {};

function onChangeFliter(){
	var fliterUI = $("#fliter_form .fliter");
	for(var i in fliterUI){
		fliter[fliterUI.attr("id")] = fliterUI.val();
	}
	calculationGuns();
	drawTable(guns, "table");
}

function initEvent(){
	$("#fliter_form input.fliter[type='text']").change(onChangeFliter);
	$("#fliter_form .fliter[type='button']").click(onChangeFliter());
}
$(document).ready(function () {
	initEvent();
	calculationGuns();
	drawTable(guns, "table");
});