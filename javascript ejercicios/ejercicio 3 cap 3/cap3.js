class celulares{
    constructor(color,peso,rdc,ram,tamaño){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendidoYApagado(){
        if (this.encendido == false){
            alert("celular prendido")
            this.encendido = true;
        }else {
            alert("el celular esta apagado")
        } 
    } 
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular")
            this.encendido = false
        }else {
            alert("el celular esta apagado")
            this.encendido = false
        }
    }
    tomaFoto(){
        alert(`esta foto se tomo con la siguiente resolucion: ${this.resolucionCamara}`)
    }
    grabarVideo(){
        alert(`video grabado en ${this.resolucionCamara}`)
    }
    mostrarinfo(){
        return `color: ${this.color} <br>
        peso: ${this.peso}  <br>
        tamaño: ${this.tamaño} <br>
        resolucion de video:${this.rdc} <br> 
        memoria ram: ${this.ram} <br>`
    }
}

celular = new celulares("rojo","170kg","5","full hd+","10gb");
celular1 = new celulares("azul","175kg","4","full hd+","20gb");
celular2 = new celulares("verde","180kg","3","full hd+","5gb");


document.write(`
    ${celular.mostrarinfo()} <br>
    ${celular1.mostrarinfo()} <br>
    ${celular2.mostrarinfo()} <br>
    `)

// celular.botonEncendidoYApagado();
// celular.tomaFoto();
// celular.grabarVideo();
// celular.reiniciar();
