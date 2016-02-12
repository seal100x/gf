var fliter = {};

function onChangeFliter() {
	var fliterUI = $("#fliter_form .fliter");
	for (var i = 0; i < fliterUI.length; i++) {
		fliter[$(fliterUI[i]).attr("id")] = $(fliterUI[i]).val();
	}
	calculationGuns();
	drawTable(guns, "table");
}

function initEvent() {
	$("#fliter_form input.fliter[type='text']").change(onChangeFliter);
	$("#fliter_form .fliter[type='button']").click(onChangeFliter);
	$("#enemy-type").change(function(){
		$("#enemy-hit").val($("#enemy-type").val().split(",")[0]);
		$("#enemy-dodge").val($("#enemy-type").val().split(",")[1]);
		onChangeFliter();		
	});
	
	$("#front_filter_div").empty();
	$("#front_filter_div").append($("<button>").addClass("btn btn-default front_filter_option").attr("type", "button").text("清空"));
	for(var t in GUNTYPE){
			var $btn = $("<button>").addClass("btn btn-xs btn-default front_filter_option").attr("type", "button").text(GUNTYPE[t]).css("margin", "2px").css("padding", "4px").css("font-size", "15px").val(".type");
			$("#front_filter_div").append($btn);
	}
	//前台筛选
	$(".front_filter_option").click(function(){
		filterHTML(this);
		 return false;
	});
}

function filterHTML(btn){
	var tableDivList = $("#table .table-body .table-row");
	var str = $(btn).text();
	var val = $(btn).val();
	$(".front_filter_option").css("color","black");
	$(btn).css("color","red");
	 for(var i = 0 ; i < tableDivList.length; i++){
		 if(str == "清空"){
			$(tableDivList[i]).show();
		 }
		 if(val.indexOf(".") >= 0){
			 if($(tableDivList[i]).find(val.replace(".",".td_") + ":first").text().indexOf(str) < 0){
				$(tableDivList[i]).hide();
			 }
			 else{
				 $(tableDivList[i]).show();
			 }
		 }
	 }
}

$(document).ready(function () {
	onChangeFliter();
	initEvent();
	calculationGuns();
	drawTable(guns, "table");
	menuFixed("table");
});
