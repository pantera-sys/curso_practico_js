function calcularMediana (lista){
    const listaOrdenada = lista.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    })
}
const lista = [];
const listaOrdenada = lista.sort;
const mitadlista = parseInt(listaOrdenada.length / 2);

function esPar (numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)){
    const elemento1 = listaOrdenada[mitadlista -1];
    const elemento2 = listaOrdenada[mitadlista];
    
    const promedio1y2 =  CalcularMediasAritmetica([elemento2, elemento1]);
    const mediana = promedio1y2;
    
    
}else{
    const listaOrdenada = lista.sort;
    mediana = listaOrdenada[mitadlista];
    // const numeroCentral = listaOrdenada[centro];
}

function CalcularMediasAritmetica (lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumalista / lista.length;
    return promedio;
}