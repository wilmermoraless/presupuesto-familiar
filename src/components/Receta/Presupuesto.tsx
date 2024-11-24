import { FC } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import {PresupuestoType} from "../../types";

interface PresupuestoProps {
  presupuesto: PresupuestoType;
  onEliminar: () => void;
  onEditar: () => void;
}

const Presupuesto: FC<PresupuestoProps> = ({ presupuesto, onEliminar, onEditar }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out mb-8">
    <img
      className="w-full h-48 object-cover sm:h-64 lg:h-48"
      src="https://example.com/image.jpg"
      alt="Nacatamales de pollo"
    />{presupuesto.tipo}
    <div className="p-4">
      <span className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
        Desayunos
      </span>
      <h2 className="mt-2 text-lg font-semibold">{presupuesto.nombre}</h2>
      <p className="text-gray-400 text-sm mt-2">
      {presupuesto.categoria}
      </p>
      <div className="flex items-center justify-between mt-4">
        <button className="flex items-center text-blue-500 hover:text-blue-400">
          <MdEdit className="mr-1" /> Ver presupuesto
        </button>
        <button className="flex items-center text-yellow-500 hover:text-yellow-400" onClick={onEditar}>
          <MdEdit className="mr-1" /> Editar
        </button>
        <button className="flex items-center text-red-500 hover:text-red-400" onClick={onEliminar}>
          <MdDelete className="mr-1" /> Eliminar
        </button>
      </div>
    </div>
  </div>
    
  );
};

export default Presupuesto;