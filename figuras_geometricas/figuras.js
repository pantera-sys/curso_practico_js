//codigo del cuadrado
console.group("cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("el perimetro del cuadrado miden: "+ perimetroCuadrado + "cm");
function areaCuadrado (lado){
    return lado * lado;
} 
// console.log("el perimetro del cuadrado miden: "+ areaCuadrado + "cm");
console.groupEnd();

//codigo del triangulo
console.group("triangulo");
// console.log("los lados del triangulo miden: "+ ladoTriangulo1 + " cm y la base mide: "+ baseTriangulo + " cm");
function perimetroTriangulo (lado, base) {
    return parseInt(lado) + parseInt(lado) + parseInt(base);
} 
// console.log("el perimetro del triangulo es: "+ perimetroTriangulo +" cm");
function areaTriangulo (base, altura){
  return  (base * altura) / 2 ;
}
// console.log("el area del triangulo es: "+ areaTriangulo +" cm");
console.groupEnd();

//codigo del circulo
console.group("circulo");
const radioCirculo = 4;
console.log("el radio del circulo es: "+ radioCirculo +" cm");

const diametroCirculo = radioCirculo * 2 ;
// console.log("el diametro del circulo es: "+ diametroCirculo +" cm");
const PI = Math.PI;
function perimetroCirculo(diametro) {
    return diametro * PI;
}
// console.log("el perimetro del circulo es: "+ perimetroCirculo +" cm");s
function areaCirculo (radio){
    return (radio * radio)* PI;
}
// console.log("el area del circulo es: "+ areaCirculo +" cm")
console.groupEnd();

// Aqui se interactua con el HTML
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
// codigo de triangulo
function calcularPerimetroTriangulo (){
    const input = document.getElementById("InputTrianguloA");
    const inputB = document.getElementById("InputTrianguloB");
    const value = input.value;
    const valueB = inputB.value;

    const perimetroTri = perimetroTriangulo(value, valueB);
    alert(perimetroTri);
}

function calcularAreaTriangulo (){
    const inputB = document.getElementById("InputTrianguloB");
    const input = document.getElementById("InputTrianguloC");
    const valueC = input.value;
    const valueB = inputB.value;

    const areaTri = areaTriangulo(valueB, valueC);
    alert(areaTri);
}

// codigo de circulo 

function calcularPerimetroCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = value * 2;

    const perimetro = perimetroCirculo(diametro);
    alert(perimetro);
}

function calcularAreaCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area es: " + area);
}