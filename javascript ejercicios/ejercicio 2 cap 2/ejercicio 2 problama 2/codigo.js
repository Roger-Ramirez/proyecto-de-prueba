let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales=[];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)),0];
}

const tomaDeAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i=0; i<30;i++){
    for (alumno in alumnosTotales){
        tomaDeAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________presentes: ${alumnosTotales[alumno][1]} <br>
    ________ausencias: ${30 - alumnosTotales[alumno][1]}`
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b>reprobado por inasistencias</b><br><br>";
    }else {
        resultado+= "<br><br>"
    }
    document.write(resultado)
}
