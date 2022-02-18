import { revisarPrespuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControPresupuesto = ({ presupuesto, restante}) => {
  return (
    <>
        <div className='alert alert-primary'>
            Prespuesto: $ { presupuesto }
        </div>
        <div className={ revisarPrespuesto( presupuesto, restante ) }>
            Restante: $ {restante}
        </div>
    </>
  )
}
ControPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
    
}

export default ControPresupuesto