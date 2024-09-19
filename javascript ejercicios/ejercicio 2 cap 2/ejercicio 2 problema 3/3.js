
const sumar=(num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar=(num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar=(num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir=(num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("que operacion desea hacer?");
let op = prompt("1: suma 2:resta 3:multiplicacion 4:division");

if (op == 1){
    let numero1 = prompt("ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (op == 2){
    let numero1 = prompt("ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (op == 3){
    let numero1 = prompt("ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (op == 4){
    let numero1 = prompt("ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else {
    alert("NO HAY OPERACION ")
}