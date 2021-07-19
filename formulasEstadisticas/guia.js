function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [100,200,500,400000000];
  
  
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
//   if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];
  
//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
//     mediana = promedioElemento1y2;
//   } else {
//     mediana = lista1[mitadLista1];
//   }

  function calcularMediana (lista){
    const mitad = parseInt(lista.length / 2) ;
    const listaOrdenada = lista.sort; 
    if (esPar(lista)){
        const primerElemento = listaOrdenada[mitad - 1 ];
        const segundoElemento = listaOrdenada[mitad];

        const promedio = calcularMediaAritmetica([primerElemento, segundoElemento])
        mediana = promedio;
    } else {
        mediana = listaOrdenada[mitad]; 
    }
    return mediana;
  }