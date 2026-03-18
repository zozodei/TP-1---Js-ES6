//EJERCICIO 1 -Formatear nombre

const formatearNombre = (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
console.log(formatearNombre("maNu"));
console.log(formatearNombre("fLeECha"));

//Ejercicio 2 -Contar letras

const contarLetras = (texto) => texto.replaceAll( " ","").length;
console.log(contarLetras("hola Zoe"));  

//Ejercicio 3- Numero Mayor

const maximoPatejim = (a,b,c) => 
{
    let mayor = a;

  if (b > mayor) {
    mayor = b;
  }

  if (c > mayor) {
    mayor = c;
  }

  return mayor;
}

console.log (maximoPatejim (10,13,19876))


//Ejercicio 4- Validar contraseña

const validarPassword = (password) => 
{
    let esverdad = false; 
    
    if (password.length >= 8 && /\d/.test(password))
        {
            esverdad = true;
        }
    return esverdad;
}

console.log(validarPassword("zoedei123"));


//PARTE 2

//Ejercicio 5-sumarArray
const sumarArray = (arrayNumeros) => 
    {
        let sumaTotal = 0;
        arrayNumeros.forEach(e =>
        {
            sumaTotal += e;    
        });
        return sumaTotal;
    }
    const array = [1, 2, 3, 4]
console.log(sumarArray(array));

//Ejercicio 6-Numero mayor de un array

const mayorNumero = (array) => array.sort((a, b) => b - a)[0];
const arrayMayorNum = [1, 3, 20, 19, 3, -1]
console.log(mayorNumero(arrayMayorNum));

//Ejercicio 7-Filtrar pares

const obtenerPares = (array) => array.filter(e => e % 2 === 0);
const arrayPares = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(obtenerPares(arrayPares));


//PARTE 3

//Ejercicio 8- descripcion usurario

const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}

const descripcionUsuario = (usuario) => `${usuario.nombre} tiene ${usuario.edad} años`

console.log(descripcionUsuario(usuario));

//Ejercicio 9- activar usuario

const activarUsuario = (usuario) => usuario.activo = true;

//Ejercicio 10 - Precio total 

const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

const calcularPrecioTotal = (productos) => 
{
    let precioTotal = 0; 

    productos.forEach(e => 
    {
        precioTotal += e.precio;
    });

    return precioTotal;
}

console.log ( calcularPrecioTotal(productos));


//PARTE 4

//Ejerc