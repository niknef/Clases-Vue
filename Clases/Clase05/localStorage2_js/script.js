 function enviar(){
		if (!localStorage.getItem("agenda")){
			var array_para_data = [];
		}else{
			array_para_data = JSON.parse(localStorage.agenda);

		}

		var nombre=document.querySelector("#nombre").value;
		var apellido=document.querySelector("#apellido").value;
		var telefono=document.querySelector("#telefono").value;
			
			data = { nombre: nombre, apellido: apellido, telefono : telefono }

			array_para_data.push(data);

			localStorage.setItem("agenda", JSON.stringify(array_para_data));	


			recuperar_localStorage= JSON.parse(localStorage.getItem("agenda"));
		
				
			console.log(typeof recuperar_localStorage) ;
				//console.log(typeof localStorage.getItem("agenda")) ;
				
				mostrar();
 
		} //fin enviar


function mostrar(){

var guardar = '';
 for (var key in recuperar_localStorage) {
      guardar +=            
                 '<p class="datos" ><span>' + recuperar_localStorage[key].nombre + '</span><span> '+ recuperar_localStorage[key].apellido + '</span><span> ' + recuperar_localStorage[key].telefono + '</span></p>'
                        }

       document.querySelector("#mostrar").innerHTML = guardar;
	
		document.querySelector("#nombre").value ="";
		document.querySelector("#apellido").value ="";
		document.querySelector("#telefono").value ="";
			


	}
			
