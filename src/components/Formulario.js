import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState } from "react"

import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
    // useState
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [ error, setSerror] = useState(false);

    // cuando se agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar campos
        if( cantidad < 1 || isNaN( cantidad) || nombreGasto.trim() ===''){
            setSerror( true );
            return;
        }
        setSerror( false );

        // construir el gasto
        const gasto = {
            nombreGasto,
            cantidad,
            id: uuidv4()
        }

        // pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto( true )

        // reset el form
        setNombreGasto( '' );
        setCantidad(0);
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus Gastos Aquí</h2>
            {
                error && 
                <Error mensaje = 'Ambos Campos Son Obligatorios o Presupuesto Incorrecto'/>
            }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type='text'
                    className = "u-full-width"
                    placeholder = "Ej. Transporte"
                    value={ nombreGasto }
                    onChange = {e => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type='number'
                    className = "u-full-width"
                    placeholder = "Ej. 300"
                    value={ cantidad }
                    onChange = { e => setCantidad( parseInt (e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;