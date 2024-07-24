import { useState, useEffect } from "react"


function Editar({contacto, alActualizar}){
    const [datos, setDatos] = useState(contacto || {});

    useEffect(() => {
        setDatos(contacto || {});
      }, [contacto]);

    function cambiar(e){
        setDatos({...datos, [e.target.name]: e.target.value})
    }

    function validar(){
        return datos.nombre && datos.apellido && datos.telefono
    }
    
    function cancelar(e) {
        e.preventDefault();
        e.stopPropagation();
        alActualizar(null);
    }
    
    function guardar(e) {
        e.preventDefault();
        e.stopPropagation();
        if (validar()) {
            alActualizar(datos);
        }else{
            alert('Faltan completar campos, por favor ingresar datos');
        }

    }

    return(
        <section>
            <form >
                <label>
                    Nombre:
                    <input type="text" name="nombre"
                    value={datos.nombre || ""} onChange={cambiar}/>
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido"
                    value={datos.apellido || ""} onChange={cambiar}/>
                </label>
                <label>
                    Telefono:
                    <input type="text" name="telefono"
                    value={datos.telefono || ""} onChange={cambiar}/>
                </label>

                <button onClick={cancelar}>Cancelar</button>
                <button onClick={guardar}>Guardar</button>
            </form>
        </section>

    );

}

export default Editar;