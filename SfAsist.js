
//           CALCULADORA

let cantidad = prompt("Cuantos al alumnos son?");

let alumnosTotales = [];

for ( i = 0; i < cantidad; i++) {
    alumnosTotales[i] =[prompt(" nombre del alumno " + (i + 1)),0]


}

const tomarAsistencia = (nombre, p)=>{
    let presencia  = prompt( nombre + " asistio?"  );
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }

}

    for (alumno in alumnosTotales){  

     let resultado = `${alumnosTotales[alumno][0]} :<br> 
    _________ASISTENCIAS: ${alumnosTotales[alumno][1]} :<br>
    _________AUSENCIAS: ${30 - alumnosTotales[alumno][1]} :<br>
    `;
    if ( 30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<br> <b> reprobado por inasistencia: </b> <br>"
    }else{
        resultado += "<br><br>"
    }
    document.write(resultado);
} 