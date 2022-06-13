// Una pregunta vamos a ver como hacer para que cuando un usuario seleccione un producto lo lleve a otro HTML con mas datos del producto y que sea así con todos los productos, ósea reutilizando el html

// OPERADOR TERNARIO
// Tiene un return implicito
const color = 'red'
color === 'red' ? console.log('el color es rojo') : ('es otro color')

// OPERADOR LOGICO AND
// Es como un and pero en una linea y solo si se cumple
const carrito = []
carrito.length === 0 && console.log('el carrrito esta vacio')
// Tiene un return implicito
const estado = carrito.length === 0 && 'vacio';
console.log(estado)

// OPERADOR LOGICO OR
// Se fija si la primera opcion es verdadera, si no asi usa el segundo
const usuario1 = {
  nombre: "John Doe",
  edad: 14
}
const usuario2 = null

console.log( usuario1 || "El usuario no existe" )
// { nombre: 'John Doe', edad: 14 }
console.log( usuario2 || "El usuario no existe" )
// El usuario no existe


// OPERADOR NULLISH
// Igual al operador or pero devuelve mas true que false
// Por ejemplo en el '0' devuelve true mientras que el or devuelve false
const precio = 0
console.log(precio || 'no tiene precio')
// me devuelve no tiene precio
console.log(precio ?? 'no tiene precio')
// devuelve 0

// ACCESO CONDICIONAL A UN OBJETO
// Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error.
const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"
// Agregamos ? y listo
console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"

// Tambien sirve cuando una propiedad dentro de un objeto no existe
const usuario3 = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
      javascript: "aprobado"
    }
  }
  
  console.log( usuario3?.cursos?.javascript || "La propiedad no existe")
  // "aprobado"
  console.log( usuario3?.trabajos?.coderhouse || "La propiedad no existe")
  // "La propiedad no existe"
  

//   DESESTRUCTURACION
// Para obtener los datos del usuario sin necesidad de escribir todas las lineas indicando el valor
// Para  que la desestructuración funcione debe haber coincidencia con los nombres de las propiedades del objeto.

const usuario4 = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
}


const nombre2 = usuario4.nombre
const edad2 = usuario4.edad

// Esto seria lo mismo pero en menos lineas y mejor
const { nombre, edad } = usuario4
const { telefono: {trabajo} } = usuario4

console.log(nombre) // "John Doe"
console.log(edad) // 32
console.log(trabajo) // 113325555

// En este caso desestructuramos todas las propiedades de item pero a través del alias que indicamos para cada una

const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nombreItem,
    price_per_unit: precioItem
} = item

console.log(id) // 432
console.log(nombre) // "Some product"
console.log(precio) // 5600

// Asi desestructuramos un objeto a travez de una funcion
const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

// desestructurando lo que reciba por parámetro
const desestructurar = ( {id, nombre} ) => {
    console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript

//Esto funciona porque esta viendo los vlaores x, y de la variable e que seria el evento que se esta ejecutando
window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
})


// Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuración de objetos es que la de arrays es posicional. 

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"

const nombres2 = ["Juan", "Julieta", "Carlos", "Mariela"]

// OPERADOR SPREAD

// spread ... del array
console.log(...nombres2) // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")


const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(numeros) ) // NaN
console.log( Math.max(...numeros) ) // 92

const nombres1 = ["Juan", "Julieta"]
const nombres3 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombres4 = [...nombres1, ...nombres3]

console.log(nombres4) // ["Juan", "Julieta", "Carlos", "Mariela"]

// spread del array en un objeto
const nombresObj = {
    ...nombres4
}

console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }


const usuario10 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}
console.log(usuario10)
// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario20 = {
    ...usuario10
}

const usuario21 = {
    usuario10
}

console.log(usuario20) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }
console.log(usuario21) // se guarda un objeto dentro de otro

const usuario30 = {
    ...usuario10,
    curso: "ReactJS",
    email: "juan@doe.com"
}

console.log(usuario30)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }


// El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos recibir una cantidad indeterminada de parámetros.
function sumar(...numeros) {
    console.log(numeros)
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]

function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450