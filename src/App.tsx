import { useState, useEffect } from 'react'
import Boton from './Boton'
import { Form } from './assets/Forms'

function App() {
  const [oscuro, setOscuro] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', oscuro)
  }, [oscuro])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <div className="flex justify-end p-4">
        <Boton variante="secundario" onClick={() => setOscuro(!oscuro)}>
          {oscuro ? 'Modo claro' : ' Modo oscuro'}
        </Boton>
      </div>

      <h1 className="text-3xl font-bold text-center">React tailwind</h1>
      <Form />

      <div className="p-6 flex gap-4 justify-center">
        <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
          Guardar Cambios
        </Boton>
        <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
          Cancelar
        </Boton>
        <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
          Eliminar Usuario
        </Boton>
        <Boton variante="exito" onClick={() => alert('Aprobado')}>
          Aprobar
        </Boton>
        <Boton disabled>
          Deshabilitado
        </Boton>
      </div>
    </div>
  )
}

export default App