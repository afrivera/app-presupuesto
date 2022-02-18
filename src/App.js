import { useEffect, useState } from "react";
import ControPresupuesto from "./components/ControPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState( false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){

      // agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      // resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante( presupuestoRestante);

      // reset estado a false
      setCrearGasto( false );
    }
    
  }, [ gasto, gastos, crearGasto, restante ])
  

  // cuando se agregue un nuevo gasto
  // const agregarGastos = gasto => {
  //   setGastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            mostrarPregunta ? 
            (
              <Pregunta 
                setPresupuesto = { setPresupuesto }
                setRestante = { setRestante }
                setMostrarPregunta = { setMostrarPregunta }
              /> 
            ) :
            (
              <div className="row ">
                <div className="one-half column">
                  <Formulario 
                    setGasto= { setGasto }
                    setCrearGasto = { setCrearGasto }
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos = { gastos }
                  />

                  <ControPresupuesto 
                    presupuesto = { presupuesto}
                    restante = { restante }
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
