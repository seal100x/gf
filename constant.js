var GUNTYPE = [
	"手枪", "冲锋枪", "步枪", "突击步枪", "机枪"
]

var BUFFTYPE = [
	'','伤害','射速','命中','回避','暴击率','技能触发率','护甲穿透率'
]

var NUM = {
	"life" : 55,
	"basepow" : 16,
	"pow" : 0.242,
	"basehit" : 5,
	"hit" : 0.303,
	"basedodge" : 5,
	"dodge" : 0.303,
	"baserate" : 45,
	"rate" : 0.181,
}
var NUM2 = {
	"life" : 0.555,
	"basepow" : 100,
	"pow" : 100,
	"basehit" : 100,
	"hit" : 100,
	"basedodge" : 100,
	"dodge" : 100,
	"baserate" : 100,
	"rate" : 100,
}
var NUM3 = {
	"life" : 100,
	"basepow" : 100,
	"pow" : 100,
	"basehit" : 100,
	"hit" : 100,
	"basedodge" : 100,
	"dodge" : 100,
	"baserate" : 100,
	"rate" : 100,
}
var RATIO = {
	"手枪" : {
		"life" : 0.6,
		"pow" : 0.6,
		"rate" : 0.8,
		"speed" : 1.5,
		"hit" : 1.2,
		"dodge" : 1.8,
		"range" : 0.75
	},
	"冲锋枪" : {
		"life" : 1.6,
		"pow" : 0.6,
		"rate" : 1.2,
		"speed" : 1.2,
		"hit" : 0.3,
		"dodge" : 1.6,
		"range" : 0.75
	},
	"步枪" : {
		"life" : 0.8,
		"pow" : 2.4,
		"rate" : 0.5,
		"speed" : 0.7,
		"hit" : 1.6,
		"dodge" : 0.8,
		"range" : 1.4
	},
	"突击步枪" : {
		"life" : 1,
		"pow" : 1,
		"rate" : 1,
		"speed" : 1,
		"hit" : 1,
		"dodge" : 1,
		"range" : 1
	},
	"机枪" : {
		"life" : 1.5,
		"pow" : 1.8,
		"rate" : 1.6,
		"speed" : 0.4,
		"hit" : 0.6,
		"dodge" : 0.6,
		"range" : 0.95
	}
}

//================战斗数据
var BATTLE_NUM4 = 2;
