let Nombre = "Ezequiel";
let Apellido = "Duarte";
let Estudiante = Nombre.concat(" ", Apellido);
let EstudianteMayus = Estudiante.toUpperCase();
let EstudianteMinus = Estudiante.toLowerCase();
let Num_Letras = Estudiante.length;
let First_letNomb = Nombre.charAt(0);
let Last_letApe = Apellido.charAt(5);
let Sin_Espacios = Estudiante.replace(/ /g, "");
let Boolean_Estu = Estudiante.includes("Ezequiel")

console.log(Estudiante)
console.log(EstudianteMayus)
console.log(EstudianteMinus)
console.log(Num_Letras)
console.log(First_letNomb)
console.log(Last_letApe)
console.log(Sin_Espacios)
console.log(Boolean_Estu)