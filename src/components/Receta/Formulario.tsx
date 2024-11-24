import React, { FC, useState, useEffect } from 'react';

import { PresupuestoType } from '../../types';

interface FormularioProps {
  onAddArticle: (nombre: string, categoria: string, tipo:string, monto:string, presupuesto?: PresupuestoType) => Promise<void>;
  presupuesto?: PresupuestoType | null;
}

const Formulario: FC<FormularioProps> = ({ onAddArticle, presupuesto }) => {
  const [nombre, setPresupuesto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim() && categoria.trim() && tipo.trim() && monto.trim()) {
      await onAddArticle(nombre.trim(), categoria.trim(), tipo.trim(), monto.trim(), presupuesto || undefined); 
      setPresupuesto('');
      setCategoria('');
      setTipo('');
      setMonto('');
    }
  };

  useEffect(() => {
    if (presupuesto) {
      setPresupuesto(presupuesto.nombre);
      setCategoria(presupuesto.categoria);
      setTipo(presupuesto.tipo);
      setMonto(presupuesto.monto);
    }
  }, [presupuesto]);


  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '9px', backgroundColor: '#fff' }}>
      <div className="flex items-start justify-center mb-6 text-2x1 font-bold">
      <h1>Crear nuevo artículo</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label className='font-bold'>Título</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setPresupuesto(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label className='font-bold'>categoria</label>
          <textarea
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label className='font-bold'>tiempo</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label className='font-bold'>imagen</label>
          <input
            type="date"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '20px 50px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '9px' }}>{presupuesto ? 'Actualizar' : 'Guardar'}</button>
        
      </form>
    </div>
  );
};

export default Formulario;