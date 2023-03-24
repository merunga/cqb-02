const validator = {
  
 // Función validar
  isValid:function(creditCardNumber) {
    const arrayRevertido = [...creditCardNumber].reverse(); //spread operator - operador de propagación
    console.log(arrayRevertido);

    let arrayPares = arrayRevertido.filter((elemento,i)=> i % 2!=0); // Método filter
    let arrayImpares = arrayRevertido.filter((elemento,i) => i % 2==0); // elemento del array
    //console.log(arrayPares);
    //console.log(arrayImpares);
 
    let sumaNuevosPares = 0;
    let sumaNuevosImpares = 0;
    let devuelve;

   // Para recorrer mi array pares y realizar las operaciones
   for (let i = 0 ; i < arrayPares.length ; i++ ) {  //Bucle,cada que termina el ciclo el i vale 1+ - i=posición del ciclo
       let convertirString = parseInt (arrayPares[i]); //Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
       let nuevosPares = convertirString*2;      //[i] posición 
       //console.log(nuevosPares);
          if (nuevosPares >= 10) { //condicional
              nuevosPares = nuevosPares-9;
           }
         sumaNuevosPares = sumaNuevosPares + nuevosPares;
   }
   //console.log(sumaNuevosPares);

   // Para recorrer mi array impares y realizar la operación
   for (let i = 0 ; i < arrayImpares.length ; i++ ){
        sumaNuevosImpares = sumaNuevosImpares + parseInt (arrayImpares[i]);
    }
    //console.log(sumaNuevosImpares);

   let totalSuma = sumaNuevosPares + sumaNuevosImpares;
     if (totalSuma % 10 == 0){
       devuelve = true;
       
      }
     else {
       devuelve = false;
     }

    return devuelve;
    //console.log(devuelve);
    
  } ,
 
  //Función maskify
  maskify:function(creditCardNumber){
  //console.log (creditCardNumber);  
  let totalEnmascarado;
  let enmascarar = []; //string

  let separar = creditCardNumber.split ("");//divide un obj de tipo str en un array de cadenas
  separar.forEach((elemento , i) => {
   if (i < separar.length - 4) {
     elemento = "#";
     //console.log(elemento);
   }
   
   enmascarar.push(elemento); //metodo push, añade valores a un array
   //console.log(enmascarar);
   totalEnmascarado = enmascarar.join ('');//une todos los elementos de una matriz en
   //una cadena y devuelve esta cadena

 });
 //console.log (totalEnmascarado);
 return totalEnmascarado;

 
  }

}

export default validator;
