function ListaNota({ notas, eliminarNota }) {
  return (
    <ul className="mt-5 space-y-3">
      {notas.map((nota) => (
        <li 
          key={nota.id} 
          className="bg-gray-100 p-3 rounded-md shadow-sm border-l-4 border-blue-500 flex justify-between items-center transition-all"
        >
          <div className="flex flex-col">
            <span className="text-gray-800 font-medium">{nota.texto}</span>
            {/* Parte A: Timestamp formateado */}
            <small className="text-gray-500 text-xs mt-1">
              {new Date(nota.id).toLocaleString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })}
            </small>
          </div>
          
          <button 
            onClick={() => eliminarNota(nota.id)}
            className="text-red-500 hover:text-red-700 font-bold px-2 py-1 transition-colors"
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaNota