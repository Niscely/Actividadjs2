//porcentaje de mujeres y varones//

let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres"))
let varones = parseInt(prompt("ingrese la cantidad de varones"))

let total = mujeres + varones

let totalm = mujeres / total * 100
let totalv = varones / total * 100

resultado = `Mujeres: ${totalm} % <br> Varones: ${totalv} %`
document.write(resultado)