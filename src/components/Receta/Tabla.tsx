import { FC } from 'react';
import Presupuesto from './Presupuesto.tsx';
import {TablaProps} from "../../types/index.ts";


const Tabla: FC<TablaProps> = ({
  presupuestos,
  onEliminarPresupuesto,
  onEditarPresupuesto,
}) => {
  return (
    <ul className="mt-4">
      {presupuestos.map((presupuesto) => (
        <Presupuesto
          key={presupuesto.id}
          presupuesto={presupuesto}
        
          onEliminar={() => onEliminarPresupuesto(presupuesto.id)}
          onEditar={() => onEditarPresupuesto(presupuesto.id)}
        />
      ))}
    </ul>
  );
};

export default Tabla;