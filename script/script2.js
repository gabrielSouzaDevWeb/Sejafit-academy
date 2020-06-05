function indexEvents(){
    //menu
    var btn_menu=document.querySelector("#menu-btn");
    var menu_mobile= document.querySelector("#menu-mobile");
   
    //you-atthe-sejafit
    var btn_news= document.querySelector("#btn-show-more-news");
    var btn_articles= document.querySelector("#btn-show-more-articles");

    var more_news2= document.querySelector(".news").children[2];
    var more_news3= document.querySelector(".news").children[3];
    //var more_news4= document.querySelector(".news").children[4];
    
    
    var more_articles3= document.querySelector(".articles").children[3];
    var more_articles4= document.querySelector(".articles").children[4];

    //calcIMC
    var weight= document.querySelector("#weight");
	var height= document.querySelector("#height");
	var btn_send= document.querySelector("#send");
	var imc= document.querySelector("#imc-result");
    var avaliacao= document.querySelector("#avaliacao");
   

    btn_menu.addEventListener("click", function(){
        toggleDisplay(menu_mobile);
        
    });

    btn_news.addEventListener("click", function(){
       toCompareWidth(more_news2, more_news3);
    });

    btn_articles.addEventListener("click", function(){
       
        toCompareWidth(more_articles3,more_articles4);
    })

    btn_send.addEventListener("click", function(){
        calcularIMC(height.value, weight.value);
    });

    function toCompareWidth(item1, item2){
        if (widthDisplay() >= 751 && widthDisplay() <= 1024) {
            toggleDisplay(item1);
            toggleDisplay(item2);
            
        } else{
            
            toggleDisplay(item2);
        }
    }

    function widthDisplay() {
        
        if (window.innerWidth){
            return  window.innerWidth;
        } else if(document.documentElement && document.documentElement.clientWidth){
            return document.documentElement.clientWidth;
        } else if(document.body){
            return document.body;
        }
    }

    function toggleDisplay(tagToggle){//documentar function e trocar nome
        
        var toggleDisplay = window.getComputedStyle(tagToggle, null).getPropertyValue("display");
        if(toggleDisplay == "block"){
            tagToggle.style.display = "none";
        } else if(toggleDisplay == "none"){
            tagToggle.style.display = "block";
        }
    }

    function calcularIMC(heightvalue,weightValue){
        let altura_calc= parseInt(heightvalue)*parseInt(heightvalue)/10000;
		let result_imc= parseInt(weightValue)/altura_calc;
		imc.setAttribute("value", parseFloat(result_imc).toFixed("1"));

		if (result_imc.toFixed("1")<18.5) {
			avaliacao.value = "Abaixo do peso";
		} else if(result_imc.toFixed("1")>18.5 && result_imc.toFixed("1")<24.9){
			avaliacao.value = "Normal";
		} else if(result_imc.toFixed("1")>25 && result_imc.toFixed("1")<29.9){
			avaliacao.value ="Sobrepeso";
		} else if(result_imc.toFixed("1")>30 && result_imc.toFixed("1")<34.9){
			avaliacao.value ="Obesidade grau 1";
		} else if(result_imc.toFixed("1")>35 && result_imc.toFixed("1")<39.9){
			avaliacao.value ="Obesidade grau 2";
		} else if(result_imc.toFixed("1")>40){
			avaliacao.value ="Obesidade grau 3";
		}
    }

}

window.onload = indexEvents;

