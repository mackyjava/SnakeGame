window.onload=generarComida;



document.addEventListener("keypress",desplazar, true);
document.addEventListener("keydown",comer,true);
function desplazar(e){
    var tecla = {
		left: 37,
		up: 38,
		right:39,
		down:40
	}
   
        var situacionY = document.getElementById("vibora").offsetLeft;
         var situacionX = document.getElementById("vibora").offsetTop;
	    
        switch (e.keyCode){
            case tecla.left:
				if(situacionY>0){
                vibora.style.left = situacionY-50+"px"
			      contadorPosY -=50;
			          return contadorPosY
				}else{ alert("perdiste")}; 
				break;
            case tecla.up:
				if(situacionX>0){
                vibora.style.top = situacionX -50+"px"
					contadorPosX-=50;
					return contadorPosX;
			    }else{alert("perdiste")}
		        ;break;
            case tecla.right : 
		         if(situacionY<250){
                 vibora.style.left = situacionY+50+"px"
					 contadorPosY +=50;
					  return contadorPosY;
				 }else{ alert("perdiste")}	 
		         ;break;
            case tecla.down:
		         if(situacionX<250){
                 vibora.style.top = situacionX+50+"px"
					 contadorPosX +=50;
					 return contadorPosX;
				 }else{ alert("perdiste")}	
		         ;break;
        default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
				
				
        } 
	}


 function generarComida() {
	 var comida =document.getElementById("comida");
	 comida.style.top="100px";
	 comida.style.left="100px";
	 
	 
} 

