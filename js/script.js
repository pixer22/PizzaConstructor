$(document).ready(function() {
	

	function clearAll(){
		$(".fish").css("background-position","-100px 0px");
		$(".meat").css("background-position","-50px 0px");
		$(".vegetables").css("background-position","-248px 0px");
		$(".cheese").css("background-position","-198px 0px");
		$(".flavoring").css("background-position","-346px 0px");
		$(".fishItem").css("display","none");
		$(".meatItem").css("display","none");
		$(".vegetablesItem").css("display","none");
		$(".cheeseItem").css("display","none");
		$(".flavoringItem").css("display","none");

	}
	$(".fish").on("click", function(){
		clearAll();
		$(this).css("background-position","-100px -42px");
		$(".fishItem").css("display","block");
	})
	$(".meat").on("click", function(){
		clearAll();
		$(this).css("background-position","-50px -42px");
		$(".meatItem").css("display","block");
	})
	$(".vegetables").on("click", function(){
		clearAll();
		$(this).css("background-position","-248px -42px");
		$(".vegetablesItem").css("display","block");
	})
	$(".cheese").on("click", function(){
		clearAll();
		$(this).css("background-position","-198px -42px");
		$(".cheeseItem").css("display","block");
	})
	$(".flavoring").on("click", function(){
		clearAll();
		$(this).css("background-position","-346px -42px");
		$(".flavoringItem").css("display","block");
	})


	
	function clearDough(){
		$(".doughFoto1").css("opacity","0.5");
		$(".doughFoto2").css("opacity","0.5");
		$(".doughFoto3").css("opacity","0.5");
		
	}
	function chooseDough(elem, text){
		clearDough();
		$(elem).css("opacity","1");
		$(".doughNameVariable").text(text);
	}
	$(".doughFoto1").on("click",function(){
		chooseDough( this,"Американо");
		
	})
	$(".doughFoto2").on("click",function(){
		chooseDough(this,"Итальяно");
	})
	$(".doughFoto3").on("click",function(){
		chooseDough(this, "Хот-дог");
	})

	
	function clearSize(){
		$(".sizeFoto1").css("background-position","50% 0");
		$(".sizeFoto2").css("background-position","50% 0");
		$(".sizeFoto3").css("background-position","50% 0");
		
	}

	function chooseSize(elem, pos, text){
		clearSize();
		$(elem).css("background-position",pos);
		$(".sizeNameVariable").text(text);
	}

	var flag = 1;
	
	$(".sizeFoto1").on("click",function(){
		chooseSize(this, "50% -65px", "35 см");
		if (flag === 1){
			containerPrice.text(Number(containerPrice.text()) + 20);
			containerWeight.text(Number(containerWeight.text()) + 160);
			flag = 0;
		}
		else if( flag === 2){
			containerPrice.text(Number(containerPrice.text()) + 30);
			containerWeight.text(Number(containerWeight.text()) + 290);
			flag = 0;
		}
	})

	$(".sizeFoto2").on("click",function(){
		chooseSize(this, "50% -56px", "30 см");
		if (flag === 0){
			containerPrice.text(Number(containerPrice.text()) - 20);
			containerWeight.text(Number(containerWeight.text()) - 160);
			flag = 1;
		}
		else if( flag === 2){
			containerPrice.text(Number(containerPrice.text()) + 10);
			containerWeight.text(Number(containerWeight.text()) + 130);
			flag = 1;
		}
	})

	$(".sizeFoto3").on("click",function(){
		chooseSize(this, "50% -47px", "25 см");
		if (flag === 0){
			containerPrice.text(Number(containerPrice.text()) - 30);
			containerWeight.text(Number(containerWeight.text()) - 290);
			flag = 2;
		}
		else if( flag === 1){
			containerPrice.text(Number(containerPrice.text()) - 10);
			containerWeight.text(Number(containerWeight.text()) - 130);
			flag = 2;
		}
	})



	
	function clearSauce(){
		$(".sauceFoto1").css("opacity","0.5");
		$(".sauceFoto2").css("opacity","0.5");
		$(".sauceFoto3").css("opacity","0.5");
		$(".sauceFoto4").css("opacity","0.5");
		
	}
	function chooseSauce(elem, text){
		clearSauce();
		$(elem).css("opacity","1");
		$(".sauceNameVariable").text(text);
	}
	$(".sauceFoto1").on("click",function(){
		chooseSauce(this,"Гарлик");
	})
	$(".sauceFoto2").on("click",function(){
		chooseSauce(this,"Ранч");
		
	})
	$(".sauceFoto3").on("click",function(){
		chooseSauce(this,"Сальса");
		
	})
	$(".sauceFoto4").on("click",function(){
		chooseSauce( this,"Барбекью");
		
	})




var containerPrice = $(".order").children(".orderPrice"),
containerWeight = $(".order").children(".orderWeight");


$(".containerForItem").on("click",".item",function(){
	if( Number(containerWeight.text()) <= 2000){
		$(".maxSize").text("");
		$(this).clone().appendTo(".container");
		$(this).css("display","none");
		var imagePizza = 'img[id="img' + $(this).data("position") + '"]';	
		$(".leftSide").find(imagePizza).css("z-index","1");	
		$(".container").find(this).css("width","23%");

containerPrice.text(Number(containerPrice.text()) + $(this).data("price"));
containerWeight.text(Number(containerWeight.text()) + $(this).data("weight"));
}
else{
	$(".maxSize").text("Чувак ты не ОХРЕНЕЛ");
}
})

var _count;


$(".container").on("click",".itemFoto",function(){
	if( Number(containerWeight.text()) <= 2000){
		$(".maxSize").text("");
		_count = Number($(this).find(".count").text());
		if(_count === 0){
			$(this).find(".count").text(2);
		}else{
			$(this).find(".count").text(_count+1);
		}
		$(this).find(".count").css("display","inline-block");
		containerPrice.text(Number(containerPrice.text()) + $(".item").has(this).data("price"));
		containerWeight.text(Number(containerWeight.text()) + $(".item").has(this).data("weight"));
	}
	else{
		$(".maxSize").text("Чувак ты не ОХРЕНЕЛ");
	}

})


$(".container").on("click",".delItem",function(){
	var pos = 'div[id="pos' + $(".item").has(this).data("position") + '"]';

	_count = Number($(".item").has(this).find(".count").text());
	
	if(_count <= 1){
		$(".item").has(this).css("display","none");
		$(".containerForItem").find(pos).css("display","inline-block");
		var imagePizza = 'img[id="img' + $(".item").has(this).data("position") + '"]';	
		$(".leftSide").find(imagePizza).css("z-index","-1");	
	}else{
		$(".item").has(this).find(".count").text(_count - 1);
	}
	
	containerPrice.text(Number(containerPrice.text()) - $(".item").has(this).data("price"));
	containerWeight.text(Number(containerWeight.text()) - $(".item").has(this).data("weight"));
})

$("#select").on("click", function(){
	console.log();
	if ($("#select option:selected").text() != "Томатный(основа)") {
		$(".itemFoto1").find("img").attr('src','img/43.jpg');
	}else{
		$(".itemFoto1").find("img").attr('src','img/1.png');
	}

})



})