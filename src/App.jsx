import { Titulo } from "./componentes/titulo";
import { Tarjetas } from "./componentes/tarjetas";
import { Tabla } from "./componentes/tabla";
import './App.css';

function App() {
  return (
    <div className="main-container">
      {/*Componente Título */}
      <Titulo></Titulo>

      {/*Componente Tabla */}
      <Tabla></Tabla>

      {/*Componente Tarjetas */}
      <Tarjetas></Tarjetas>

      
    </div>
  );
}

export default App;