//en java script se pueden llamaar dinamicas
//Tipo de datos frecuentes que se utiliza en Javascript
//String
var nombre = "Carlos";
console.log(nombre);
//cambiar la variable nombre
nombre = 10;
console.log(nombre);
console.log(typeof nombre); //typeof ara ver el tipo de variable que se esta utilizando typeof
//Numerico
var numero =1000;
console.log(numero);

//Tipo objeto
var object = { //se comporta como un array
    nombre : 'Juan',
    apellido: 'Ortiz',
    telefono: '32165498752',
}
console.log(object);

//tipo de booleano
var bandera = false;
console.log(bandera);

//Tipo de dato function
function miFuncion(){

}
console.log(miFuncion);

//tipo de dato Symbol
var simbolo = Symbol("Mi sinmbolo");
console.log(simbolo);

// Tipo clase es un a function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
    this.apellido = apellido;
    }

}
console.log(typeof Persona);
//Tipo de dato undefined
var X;
console.log(typeof X);

x = undefined;
console.log(X);

//null = ausencia de valor pero se combierte en tipo de dato object
var y =null;
console.log(y);

/********************/////////////////////////** */ */
//tipo de array
var autos = [
    'bmw','audi','volvo'
];
console.log(autos);
console.log(typeof autos);
 
var z = '';
console.log(z);


//tipo de definicion de vriables
let nombre1;
nombre1 = "Martin";
console.log(nombre1);


const apellido2 = "Ruiz";
//apellido2 ="csd"; las variabls¿es definic¿das Cont no se puede volver asignar
console.log(apellido2);


let nombreCompleto="juan perez";
console.log(nombreCompleto);

let n,m;
n = 10, m=20;
let o = n +m;
console.log(o);

//javaScript es sencible a miniculas y mayuculas
let nombresCompletos = "Carlos Ruiz Rivera";
let nombrescompletos = "Juan Perez";
console.log(nombrescompletos);
console.log(nombresCompletos);
