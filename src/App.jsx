import { useState, useEffect, useRef } from "react"
import InputNota from "./components/InputNotas"
import ListaNotas from "./components/ListaNota"
import { cargarNotas, guardarNotas } from "./components/storage"

function App() {
  const [notas, setNotas] = useState([])
  const [texto, setTexto] = useState("")

  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    const notasGuardadas = cargarNotas();
    if (notasGuardadas.length > 0) {
      setNotas(notasGuardadas);
    }
  }, []);

  useEffect(() => {
    guardarNotas(notas);
  }, [notas]);

  const agregarNota = () => {
    if (texto === "") return
    
    const nuevaNota = {
      id: Date.now(),
      texto: texto,
      fecha: new Date().toLocaleString() 
    };

    setNotas([...notas, nuevaNota]);
    setTexto("");
  };

  const eliminarNota = (id) => {
    const notasFiltradas = notas.filter((nota) => nota.id !== id);
    setNotas(notasFiltradas);
  };

  return (
    <div className="bg-gray-500 flex flex-col items-center p-10 min-h-screen">
      <h1 className="text-white text-2xl font-bold mb-4">Bloc de Notas</h1>

      <div className="bg-white p-5 rounded-lg shadow-xl w-full max-w-md">
        <InputNota 
          texto={texto} 
          setTexto={setTexto} 
          agregarNota={agregarNota} 
          inputRef={inputRef} // Enviamos el ref correctamente
        />
        
        {notas.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-lg mt-4 text-center">
            <h2 className="text-gray-800 font-bold text-lg">Sin notas</h2>
            <p className="text-gray-500 text-sm mb-4">Crea tu primera nota para que quede guardada.</p>
            <button 
              onClick={enfocarInput}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors"
            >
              + Crear nota
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-end"> 
              <button 
                onClick={() => {
                  if(window.confirm("¿Seguro que quieres borrar todas las notas?")) {
                    setNotas([]);
                  }
                }}
                className="mt-4 text-xs text-red-400 hover:text-red-600 underline transition-all font-medium"
              >
                Limpiar todo
              </button>
            </div>

            <ListaNotas 
              notas={notas} 
              eliminarNota={eliminarNota} 
            />
          </>
        )}
      </div>
    </div>
  ); // Cierre de return
} // Cierre de la función App.

export default App