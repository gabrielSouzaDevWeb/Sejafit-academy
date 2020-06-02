function indexEvents(){
    //menu
    var btn_menu=document.querySelector("#menu-btn");
    var menu_mobile= document.querySelector("#menu-mobile");
    //calcIMC
    var weight= document.querySelector("#weight");
	var height= document.querySelector("#height");
	var btn_send= document.querySelector("#send");
	var imc= document.querySelector("#imc-result");
    var avaliacao= document.querySelector("#avaliacao");
    //covidInfo

   

    //you-atthe-sejafit
    var btn_news= document.querySelector("#btn-show-more-news");
    var btn_articles= document.querySelector("#btn-show-more-articles");
    var more_news= document.querySelector(".news");
    var more_articles= document.querySelector(".articles");
    //
   //console.log(more_news.children[more_news.childElementCount-2]);
    //
    window.addEventListener("scroll", function(){
        if (window.scrollY <= 200) {
            
        }
    });

    btn_news.addEventListener("click", function(){
        //(tag pai, item que permanecerão)
        comparar();
        
    });

    /*btn_news.addEventListener("click", function(){
        toggleDisplay(shows);
    });*/

    btn_articles.addEventListener("click",function(){
        toggleDisplayChildren(more_articles,4);
    });

   

    btn_menu.addEventListener("click", function(){
        toggleDisplay(menu_mobile);
        
    });

    btn_send.addEventListener("click", function(){
        calcularIMC(height.value, weight.value);
    });

    //disposição de conteudos por largura da tela youatthesejafit
    function comparar() {
        
        if (tela() < 1024 && tela() > 751) {
            console.log("12");
            toggleDisplayChildren(more_news,3);
        } else  {//if(tela() > 1024)
            toggleDisplayChildren(more_news,4);
            console.log("21");
        }

    }

    function tela() {
        console.log("1");
        if (window.innerWidth ){
            window.innerWidth;
            console.log("2");
        } else if(document.documentElement && document.documentElement.clientWidth){
            document.documentElement.clientWidth;
            console.log("3");
        } else if(document.body){
            document.body;
            console.log("4");
        }
    }

    function toggleDisplay(tagToggle){
        
        var toggleDisplay = window.getComputedStyle(tagToggle, null).getPropertyValue("display");
        if(toggleDisplay == "block"){
            tagToggle.style.display = "none";
        } else if(toggleDisplay == "none"){
            tagToggle.style.display = "block";
        }
    }

    function toggleDisplayChildren(tagToggleAll,showBlockItem){
        var tagStyledisplay = window.getComputedStyle(tagToggleAll.children[tagToggleAll.childElementCount-2], null).getPropertyValue("display");
        if (tagStyledisplay == "block") {
            for(var i=showBlockItem;i<=tagToggleAll.childElementCount;i++){
                window.getComputedStyle(tagToggleAll.children[i+1], null).getPropertyValue("display");//?
                tagToggleAll.children[i].style.display = "none";                
            }
        } else if(tagStyledisplay == "none"){
            for(var i=showBlockItem;i<=tagToggleAll.childElementCount;i++){
                tagToggleAll.children[i].style.display = "block";
            }
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

