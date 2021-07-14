//codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: "+ ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado miden: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el perimetro del cuadrado miden: "+ areaCuadrado + "cm");

console.groupEnd();

//codigo del triangulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4 ;
const alturatriangulo = 5;

console.log("los lados del triangulo miden: "+ ladoTriangulo1 + " cm y la base mide: "+ baseTriangulo + " cm");

const perimetroTriangulo = (ladoTriangulo1 * 2) + baseTriangulo;
console.log("el perimetro del triangulo es: "+ perimetroTriangulo +" cm");

const areaTriangulo = (baseTriangulo * alturatriangulo) / 2 ;
console.log("el area del triangulo es: "+ areaTriangulo +" cm");
console.groupEnd();

//codigo del circulo
console.group("circulo");
const radioCirculo = 4;
console.log("el radio del circulo es: "+ radioCirculo +" cm");

const diametroCirculo = radioCirculo * 2 ;
console.log("el diametro del circulo es: "+ diametroCirculo +" cm");

const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es: "+ perimetroCirculo +" cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es: "+ areaCirculo +" cm")


console.groupEnd();