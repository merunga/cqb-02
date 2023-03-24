import validator from './validator.js';

 console.log(validator);

 // Llamar al boton
 let primerBoton = document.getElementById("boton"); //traigo a mi botón de html a js
 primerBoton.addEventListener('click',()=> {   // llamo a mi boton que ahora es: primerBoton
 let creditCardNumber = document.getElementById("numerosIniciales").value; 
 //console.log("Tú número de tarjeta es " +creditCardNumber );

 // Llamar a mi js validator - función isValid
 validator.isValid(creditCardNumber);

 //console.log (creditCardNumber);
 console.log(validator.isValid(creditCardNumber));

    if (validator.isValid(creditCardNumber) == true){
       document.querySelector('#respuesta').innerHTML ="Número de tarjeta valida";
      
    }
    else {
      document.querySelector('#respuesta').innerHTML = "Número de tarjeta no valida";
      //alert ();
    }
   
 // Llamar a mi js validator - función maskify

 //console.log (validator.maskify(creditCardNumber));

 let finalEmascarado = validator.maskify(creditCardNumber);
 document.getElementById("numerosIniciales").value = finalEmascarado;


});

const cargarNuevamente = document.getElementById('volverInicio');
cargarNuevamente.addEventListener ('click' , () => location.reload ());



let botonComprar = document.getElementById("comprarEntradas");
botonComprar.addEventListener ("click" , () => {                    //none - CCS 101
 document.getElementById("contenedorComprar").style.display="none";//oculta página inicial
 document.getElementById("contenedorDatos").style.display= "block";//muestra datos
})

