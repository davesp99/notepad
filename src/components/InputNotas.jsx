// Analizando el bloque de parámetros: añadimos inputRef
function InputNotas({ texto, setTexto, agregarNota, inputRef }) { 
  return (
    <div className="flex flex-col gap-3">
      <input
        // AQUÍ CONECTAMOS EL TÚNEL:
        ref={inputRef} 
        type="text"
        placeholder="Escribe una nota..."
        className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button 
        onClick={agregarNota}
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 active:scale-95 transition-all"
      >
        Guardar nota
      </button>
    </div>
  )
}

export default InputNotas