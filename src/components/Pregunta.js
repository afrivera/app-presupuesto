import { useState } from "react"
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ( { setPresupuesto, setRestante, setMostrarPregunta}) => {

    // definir state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // función que lee el presupuesto
    const definirPresupuesto = e=> {
        setCantidad( parseInt(e.target.value, 10) );
    }

    // submit para definir presupuesto
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if( cantidad <1 || isNaN( cantidad ) ){
            setError( true );
            return;
        }

        // si se pasa la validación
        setError( false );
        setPresupuesto ( cantidad );
        setRestante ( cantidad );
        setMostrarPregunta( false );
    }


    return (


        <>
        <h2>Coloca tu presupuesto</h2>
        {
            error && <Error  
                        mensaje='El Presupuesto es incorrecto'
                     />
        }
        <form onSubmit={handleSubmit}>
            <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    min="0"
                    onChange={definirPresupuesto}
            />
            <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
            />
        </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired,
}

export default Pregunta