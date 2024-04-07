class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    get nombrePropio(){ return `${this.nombre} ${this.apellido}`}
}

let p = new Persona("Juan", "Perez")    
p                                        //>  {"nombre":"Juan","apellido":"Perez"}
p.nombrePropio                           //>  "Juan Perez"

let a = 100
a += 1                                   //>  101

let v = [1, 2, 13, 4]
v                                        //>  [1,2,13,4]

v.sort()                                 //>  [1,13,2,4]

v.nuevo = "1000"                         
v                                        //>  [1,13,2,4]

Object.keys(v)                           //>  ["0","1","2","3","nuevo"]

Object.values(v)                         //>  [1,13,2,4,"1000"]
v.push(10, 20)                           
v                                        //>  [1,13,2,4,10,20]