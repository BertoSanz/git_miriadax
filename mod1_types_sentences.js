let hora = new Date().getHours();
let saludo = "\n Buenas tardes";

if (hora > 7 && hora < 12) {
    saludo = "\n Buenos dias";
} else if (hora > 13 && hora < 22 ) {
    saludo = "\n Buenas tardes";
} else {
    saludo = "\n Buenas noches";
}

console.log("");                                            //Linea 1
console.log(`${saludo}, son las ${hora} horas`);            //Linea 2
console.log("");                                            //Linea 3
console.log("");
