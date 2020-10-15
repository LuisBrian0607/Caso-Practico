//Ejercicio1
let division=function(a,b){
    return a/b;
}

console.log(division(4,2));

//Ejercicio2
let cadena=(palabra)=>{
   return `hola ${palabra}`;
}

console.log(cadena("Bebe"));

//Ejercicio3
let frases=["Chargerrrr!","Tankkkkkkkkk","Witchhhh"]

function agregando(elemento){
  frases.push(elemento);
  return frases;
}

console.log(agregando("booomer"));