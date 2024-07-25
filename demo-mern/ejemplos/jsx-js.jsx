function Boton({ texto }) {
	return <button>{texto}</button>;
}

function FormJSX() {
	return (
		<form>
			<input type='text' name='nombre' required />
			<input type='text' name='apellido' required />
			<input type='tel' name='telefono' />
			<div>
				<Boton texto='Aceptar' />
				<Boton texto='Cancelar' />
			</div>
		</form>
	);
}

// FormJSX se trasmpila (transforma) a FormReact

function FormReact() {
// React.createElement(etiqueta, atributos, contenido(hijos))
    return (
        React.createElement('form', null,
            React.createElement('input', { type: 'text', name: 'nombre', required: true }),
            React.createElement('input', { type: 'text', name: 'apellido', required: true }),
            React.createElement('input', { type: 'tel', name: 'telefono' }),
            React.createElement('div', null,
                Boton({ texto: 'Aceptar' }),
                Boton({ texto: 'Cancelar' }),
            )
        )
    )
}
