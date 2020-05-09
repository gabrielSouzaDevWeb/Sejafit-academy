function calcularIMC() {
	
	var weight= document.querySelector("#weight");
	var height= document.querySelector("#height");
	var send= document.querySelector("#send");
	var imc= document.querySelector("#imc-result");
	var avaliacao= document.querySelector("#avaliacao");

	send.onclick = function(){
	
		let altura_calc= parseInt(height.value)*parseInt(height.value)/10000;
		let result_imc= parseInt(weight.value)/altura_calc;
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

window.onload = calcularIMC;
