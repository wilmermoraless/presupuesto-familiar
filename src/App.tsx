import Tabla from './components/Receta/Tabla';
/* import Formulario from './components/Receta/Formulario'; */
/* import Receta from './components/Receta/Receta'; */

import useCrudAcciones from './hooks/useCrudAcciones';


const App = () => {
  const {
    recetas,
    receta,
    agregarReceta,
    editarReceta,
    eliminarReceta
  } = useCrudAcciones();

  return (
<div>

    
    <Tabla
    recetas={recetas}
    onEliminarReceta={eliminarReceta}
    onEditarReceta={editarReceta}
/>
</div>
   
     /*  <div className="container w-full p-4 mx-auto bg-gray-200 rounded-lg">
        <h1 className="  w-full p-5 flex items-start justify-center mb-6 text-2x1 font-black bg-blue-200">Blog informativo: Uiversidad Martin Lutero</h1>
        
        <Formulario
            onAddArticle={agregarReceta}
            receta={receta}
        />
        <div className="container w-full p-4 mx-auto bg-gray-200 rounded-lg">
        <h1 className="  w-full p-5 flex items-start justify-center mb-6 text-2x1 font-black bg-blue-200">Blog informativo: Uiversidad Martin Lutero</h1>
        <Tabla
            recetas={recetas}
            onEliminarReceta={eliminarReceta}
            onEditarReceta={editarReceta}
        />
        </div>
        
      </div> */
  );
  
};

export default App;