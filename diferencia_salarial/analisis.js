//helpers
function esPar(numerito) {
    return (numerito % 2 ===  0);
}
function CalcularMediasAritmetica (list) {
    const sumalista = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumalista / lista.length;
    return promedio;
}
// calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.lenght / 2 );
    if (esPar(lista.lenght)) {
        const personaMitad1 = lista[mitad - 1 ];
        const personaMitad2 = lista[mitad];

        const  mediana = CalcularMediasAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//mediana general
const SalariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
const SalariosColSorted = SalariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
) ;
const medianaGeneralCol = medianaSalarios(SalariosColSorted);
// calcular top 10%
const spliceStart = (SalariosColSorted.lenght *90)/100 ;
const spliceCount = SalariosColSorted - spliceStart;

const salariosColTop10 = SalariosColSorted.splice(spliceStart, spliceCount)
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaTop10Col,
    medianaGeneralCol
});