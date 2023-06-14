import FormularioCR from './Modules/FormularioCR/FormularioCR'
import ImagenCR from './Modules/Imagen/ImagenCR'
import { UsersProvider } from './Context/UsersContext';
import { useState } from 'react';

function App() {
  const [mostrar, addMostrar] = useState(false);
  return (
    <div className="">
      <UsersProvider>
        {mostrar === true ? <ImagenCR/>: <FormularioCR addMostrar = {addMostrar}/>}
      </UsersProvider>
        
    </div>
  )
}

export default App
