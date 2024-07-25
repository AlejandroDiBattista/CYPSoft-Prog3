function fetchConPromesa() {
	fetch('https://xjsonplaceholder.typicode.com/todos/1')  // 0
		.then((response) => response.json())                // 1
		.then((json) => console.log(json))                  // 2
		.catch((error) => console.error('>>>'))             // 3
		.finally(() => console.log('Fin'));                 // 4
}

async function fetchConAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // 0

        const json = await response.json(); // 1
        console.log(json);                  // 2      
    } catch (error) {                       // 3
        console.error('>>>');
    } finally {                             // 4
        console.log('Fin');
    }
}

// Try...Catch...Finally en funciones

function dividir(a, b) {
	if (b === 0) {
        throw new Error('No se puede dividir por cero');
        // Retorna hasta el primer catch que lo atrape (salteando a 'repartir')
	}
	return a / b;
}

function repartir(a) {
	return dividir(10, a);
}

function probar() {
	try {
		repartir(0);
	} catch (error) {
        if (error.message === 'No se puede dividir por cero') {
			// Procesa el error que entiende
			console.error('No se puede dividir por cero');
		} else {
            throw error;
            // Le pasa el error a quien lo llamo
        }
	}
}

async function probarTryCatchFinally() {
	try {
		// .then()
		let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		throw new Error('Esto funciono mal');
		let json = await res.json();
	} catch (error) {
		// .catch()
		console.error('>>>');
	} finally {
		// .finally()
		console.log('Fin');
	}
}

function buscarPosicion(lista, valor) {
	for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor)
            return i;
	}
	throw new Error('El valor no está en la lista');
	console.log('Esto no se va a ejecutar');        // No se ejecuta
}

function probarBuscar() {
	let i = buscarPosicion([1, 2, 3, 4, 5], 100);
	console.log("El valor está en la posición", i); // No se ejecuta
}

try {
	probarBuscar();
} catch (e) {
	console.error(e.message);
} finally {
	console.log('Esto se ejecuta siempre');
}

