var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

	calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			imc.innerHTML = imcx
			console.log(imcx);

			if(imcx<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
			else if(imcx>30){ lectura.innerHTML = "Obesidad"; }

		}else{
			alert("Debe ingresar peso y altura.")
		}

	};
