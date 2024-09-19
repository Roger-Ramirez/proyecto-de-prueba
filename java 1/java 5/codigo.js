let juegos = {
    Categoria: "Shooter",
    Nombre: "Call Of Duty Black Ops 1",
    Modo_de_juego_destacado: "Zombies",
    Fecha_de_lanzamiento: "2010"
};


let name=juegos["Nombre"];
let mode=juegos["Modo_de_juego_destacado"];
let date=juegos["Fecha_de_lanzamiento"];
let style=juegos["Categoria"];

frase=`el nombre del juego es: <strong>${name}</strong> <br>
       el modo de juego destacado es: <strong>${mode}</strong> <br>
       el genero al que pertenece es: <strong>${style}</strong> <br>
       la fecha en la que se lanzo es: <strong>${date}</strong>`;

document.write(frase);