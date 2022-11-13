// //arrays tarea1

// let frase=prompt("Introduce una frase")
// let sentence=frase.split(" ")
// let sentenceReverse=frase.split(" ")
// sentenceReverse=sentenceReverse.reverse()
// let sentenceZ_A=frase.split(" ")
// sentenceZ_A=sentenceZ_A.sort().reverse()

// console.log(sentence)

// console.log(`La primera palabra es ${sentence[0]}`)
// console.log(`La última palabra es ${sentence[sentence.length-1]}`)
// console.log(`Las palabras al revés son ${sentenceReverse.join(" ")}`)
// console.log(`Las palabras ordenadas de la Z a la A quedan como: ${sentenceZ_A.join(" ")}`)

// //arrays tarea2

// let nums=[12,-1,66,100,99,77,55,88,11,22,33,44,56,82,47,13,96,10,87,49,78,23,18,19,14]
// let usernum=parseInt(prompt("Introduce un número para buscar"))
// let numsSearch=nums.includes(usernum)
// let position=nums.indexOf(usernum)
// if (numsSearch){
//     console.log(`%cNúmero encontrado en la posición ${position}`,"background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px")
// }else{
//     console.log("el número que has ingresado no se encuentra en la lista")
// }

// //arrays tarea 3

// let clasificaciones=["Ana","Oswaldo","Raúl","Celia","María","Antonio"]
// let i=0

// console.log(`Clasificación actual`)
// let p=1
// for (i=0; i<=clasificaciones.length-1; i++){
//     console.log(`${p}) ${clasificaciones[i]}`)
//     p++
// }

// clasificaciones.splice(2,2,"Celia")
// clasificaciones.splice(3,0,"Raúl")
// clasificaciones.pop()
// clasificaciones.splice(1,0,"Roberto","Amaya")
// clasificaciones.unshift("Marta")

// console.log(`Clasificación actualizada`)
// p=1
// for (i=0; i<=clasificaciones.length-1; i++){
//     console.log(`${p}) ${clasificaciones[i]}`)
//     p++
// }

// //arrays tarea 4

// let rollingCoders=[]
// p=1
// for(i=0;i<=4;i++){
//     rollingCoders.push(prompt(`Ingresa el nombre del alumno nro${p}`))
//     p++
// }

// for(i=0;i<=rollingCoders.length-1;i++){
//     console.log(`%c¡Bienvenid@ ${rollingCoders[i]} al mundo del desarrollo web!`,"background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px")
// }
