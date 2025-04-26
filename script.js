//создаем переменную для денег
money = 0
progress = 0
level = 1
price_click = 1

	autoclick = 0
	function autoclicker() {
		money += autoclick
		$('.money__num').text(money)
	}
		setInterval(autoclicker, 1000) ;
		
		function auto(){
			autoclick += 1
			if ( money >=10){
			$('.money__num').text(money)
		}else{
			alert("денег недосаточно")
		}
	}
levels={
	
	1:{"click":10, "img":"img/001.png"},
	2:{"click":20, "img":"img/002.png"},
	3:{"click":30, "img":"img/003.png"},
	4:{"click":40, "img":"img/004.png"},
	5:{"click":50, "img":"img/005.png"},
	
}

$('.personage').on('click',function(){
	money += price_click
	progress += 1
	$('.money__num').text(money)
	if(progress == levels[level]["click"]){
		level += 1
		progress = 0
		$('.level__name').text("Уровень "+level)
		$('.personage').attr("src", levels[level]["img"])
	}
	$('.level__progress').css({"width":progress/10*100+"%"})
})

function money_plus_1(){
	if(money>=100) {
	price_click+= 1
	money -= 100
	$('.money__num').text(money)
	}else{
		alert("денег недостаточно")
		
}
}

function money_x_2(){
	if(money>=200) {
	price_click*= 2
	money -= 200
	$('.money__num').text(money)
	}else{
		alert("денег недостаточно")
		
}
}
function money_plus_3(){
	if(money>=300) {
	price_click+= 1
	money -= 300
	$('.money__num').text(money)
	}else{
		alert("денег недостаточно")
	}
}
function money_plus_4(){
	if(money>=400) {
	price_click+= 1
	money -= 400
	$('.money__num').text(money)
	}else{
		alert("денег недостаточно")
	}
}
