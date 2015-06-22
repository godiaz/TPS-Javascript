function contarVocales(palabras){
   var vocales = 0;
   for (var i = 0 ; i<palabras.length; i++){
	
	//Obtengo mi palabra
    var palabra = palabras[i]; 
     
    // ahora tengo un array de mi palabra
    palabra = palabra.split(''); 

    palabra.forEach(function (value){
          switch(value){
          	case 'a':
          	    vocales++;
          	break;
          	case 'e':
          	    vocales++;
          	break;
          	case 'i':
          	    vocales++;
          	break;
          	case 'o':
          	    vocales++;
          	break;
          	case 'u':
          	    vocales++;
          	break;
          }
    });
  } 
  return vocales;
}
