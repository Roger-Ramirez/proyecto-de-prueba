/*let numero=0;
while (numero<20){
    numero=numero+2;
    document.write(numero + "<br>")
}*/




/*let numero=0;
do{
    numero=numero+5;
    document.write(numero + "<br>");
    if (numero == 25){
        break;
    }
}while (numero < 50);*/


/*for (let i=100; i>=20; i=i-5){
    document.write(i + "<br>")
    if(i==50){
        break;
    }
}*/

/* for in nos da el indice de cada elemento o sea la posicion de cada elemento */

/*let frutas=["peras","sandias","piñas","manzanas"];
for (fruta in frutas) {
    document.write(fruta + "<br>")
}
document.write("<br>")
for (fruta of frutas) {
    document.write(fruta + "<br>")
}*/
/*for of nos demuestra el valor de esos elementos o sea el contenido  */
 


/*
array1=["josefina","ghost","Kravchenko"];
array2=["makarov","soup",array1,"woods"];

forCod:
for (let array in array2) {
    if (array==2) {
        for (let array of array1) {
            continue forCod;
            document.write(array + "<br>"); 
        }
    }
    else {
        document.write(array2[array] + "<br>");
    }
}*/