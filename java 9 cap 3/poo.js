// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verinfo(){
//         document.write(this.info + "<br>")
//     }
// }

// let perro = new animal("perro","5","cafe con blanco");
// let gato = new animal("gato","4","negro");
// let loro = new animal("loro","7","verde");

//  document.write(perro.info + "<br>")
//  document.write(gato.info + "<br>")
//  document.write(loro.info + "<br>")

// perro.verinfo();
// gato.verinfo();
// loro.verinfo();
// fin de los conceptos basicos de p00




// caracteristicas de poo

// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verinfo(){
//         document.write(this.info + "<br>")
//     }
//     ladrar(){
//         if (this.especie == "perro"){
//             document.write("¡WAW! <br>")
//         }else {
//             document.write(`no puede ladrar porque es` + this.especie + "<br>" )
//         }
//     }
// }

// let perro = new animal("perro","5","cafe con blanco");
// let gato = new animal("gato","4","negro");
// let loro = new animal("loro","7","verde");

// perro.ladrar();
// gato.ladrar();
// loro.ladrar();

// fin de caracteristicas de poo



// herencia

class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verinfo(){
        document.write(this.info + "<br>")
    }
}


class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set modificarRaza(newName)
    {
        this.raza = newName;
    }
    get getRaza{
        return this.raza;
    }
}

let Perro = new Perro("perro","5","salchicha");
let gato = new Animal("gato","4","negro");
let loro = new Animal("loro","7","verde");

Perro.setRaza = "Rothwiler"
document.write(Perro.raza);