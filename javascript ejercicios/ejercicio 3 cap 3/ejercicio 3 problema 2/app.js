class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abri(){
        if (this.iniciada == false){
            this.iniciada = true;
            alert("App Iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true){
            this.iniciada = false;
            alert("App Cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    appinfo(){
        return `
        descargas: ${this.descargas} <br>
        puntuacion: ${this.puntuacion} <br>
        peso: ${this.peso} <br>`
    }
}

app = new App("16.000","5 estrellas","900mb")
app2 = new App("14.000","4 estrellas","9000mb")
app3 = new App("23.000","3 estrellas","600mb")
app4 = new App("45.000","5 estrellas","7800mb")
app5 = new App("65.000","4 estrellas","1600mb")
app6 = new App("1.000","4 estrellas","8900mb")
app7 = new App("160.000","5 estrellas","2600mb")

document.write(`
    ${app.appinfo()} <br>
    ${app2.appinfo()} <br>
    ${app3.appinfo()} <br>
    ${app4.appinfo()} <br>
    ${app5.appinfo()} <br>
    ${app6.appinfo()} <br>
    ${app7.appinfo()} <br>`
);
