//создаем переменную для денег
money = 1000000
progress = 0
level = 1
price_click = 1

	autoclick = 0
	function autoclicker() {
		money += autoclick
		reset_money()
	}
		setInterval(autoclicker, 1000) ;
		
		function auto(){
			
			if ( money >=300){
				autoclick += 1
				money-=300
			reset_money()
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
	reset_money()
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
	reset_money()
	}else{
		alert("денег недостаточно")
		
}
}

function money_x_2(){
	if(money>=200) {
	price_click*= 2
	money -= 200
	reset_money()
	}else{
		alert("денег недостаточно")
		
}
}
function money_plus_3(){
	if(money>=300) {
	price_click+= 1
	money -= 300
	reset_money()
	}else{
		alert("денег недостаточно")
	}
}
function money_plus_4(){
	if(money>=200) {
	price_click+= 1
	money -= 200
	reset_money() 
	}else{
		alert("денег недостаточно")
	}
}
function reset_money()
{ 
	if  (money<1000)
	{
		$('.money__num').text( money)
	}
	if(money>=1000 && money < 1000000) 
	{
		$('.money__num').text( Math.floor(money / 1000)+'тыс.')
	}
	if(money>=1000000 && money < 10000000) 
	{
		$('.money__num').text( Math.floor(money / 1000000)+'млн.')
	}


	
	
	if(money>=10000000 && money < 100000000) {
		$('.money__num').text( Math.floor(money / 10000)+'млрд .')
	}
}

	
