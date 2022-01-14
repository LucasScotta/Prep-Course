// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const arr = []
  for (const key of Object.keys(objeto)) {
    arr.push([key, objeto[key]])
  }
  return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const map = {}
  for (const letter of string.split('')) {
    if (typeof map[letter] !== 'number') {
      map[letter] = 0
    }
    map[letter] += 1
  }
  return map
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  s = s.split('')
  const word = []
  for (let i = 0;i < s.length;i += 1) {
    if (s[i].toUpperCase() === s[i]) {
      word.push(s[i])
      s.splice(i, 1)
      i-=1
    }
  }
  return word.join('') + s.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str = str.split(' ')
  let result = ''
  for (let i = 0;i < str.length;i += 1) {
    const word = str[i]
    if (word.length === 1) {
      result += word[0]
      if(i === str.length-1) {
        continue
      }
      result += ' '
      continue
    }
    const arr = []
    for (const letter of word) {
      arr.unshift(letter)
    }
    result += i === str.length-1 ? `${arr.join('')}` : `${arr.join('')} `
  }
  return result
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString()
  for (let i = 0;i < numero.length / 2;i += 1) {
    if (numero[i] !== numero[numero.length - i - 1]) {
      return 'No es capicua'
    }
  }
  return 'Es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 return cadena.split('').reduce((acc, letter) => {
   if (letter !== 'a' && letter !== 'b' && letter !== 'c') {
     return acc += letter
   }
   return acc
 }, '')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a, b) => a.length - b.length)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const arr = []
  for (const n1 of arreglo1) {
    for (const n2 of arreglo2) {
      if (n1 === n2) {
        arr.push(n1)
        break
      }
    }
  }
  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

