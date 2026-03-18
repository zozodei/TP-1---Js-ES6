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

//Ejercicio 11 - Map

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

const nombres = usuarios.map(usuario => usuario.nombre);

console.log (nombres);

//Ejercicio 12 - Filter

const edadesMayor18 = usuarios.filter(e => e.edad > 18);
console.log(edadesMayor18);

//Ejercicio 13 - Reduce

const sumaEdades = usuarios.reduce((acc, usuarios) => acc + usuarios.edad, 0)
console.log(sumaEdades);

//Parte 5 

//Ejercicio 14
const producto = {

nombre:"Notebook",

precio:1000

}

const { nombre, precio } = producto;

console.log(nombre); 
console.log(precio); 

//Ejercicio 15

const productoConStock = { ...producto, stock: 10};
console.log(productoConStock);

//Parte 6

//Ejercicio 16
const buscarProductos = (productos, nombre) => productos.find(producto => producto.nombre === nombre);
console.log(buscarProductos(productos, "Monitor"));

//Ejercicio 17

const productosCaros = (productos) => productos.filter(e => e.precio > 50);
console.log(productosCaros(productos));

//Ejercicio 18

const promedio = (numeros) => {
    let promedio = 0;
    numeros.forEach(e => 
    {
        promedio += e;
    })
    return promedio/numeros.length;
}
const numerosPromedio = [2, 4, 6, 8]
console.log(promedio(numerosPromedio))




//EJERCICIO FINAL

const usuarios1 = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

//1.
const obtenerUsuarios = () => {
  return usuarios1;
}
console.log(obtenerUsuarios());


//2.

const obtenerUsuarioPorId = (id) => usuarios1.find(e => e.id === id)
console.log(obtenerUsuarioPorId(2).nombre);


//3.

const obtenerMayores = (usuarios1) => usuarios1.filter(e => e.edad >= 18)
console.log(obtenerMayores (usuarios1));

//4.

const crearUsuario = (nombre, edad) => new usuarios1 ["Manu", 16];