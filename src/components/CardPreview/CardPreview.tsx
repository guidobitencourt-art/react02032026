import { useState } from "react"

const CardPreview = () => {
    // Iniciamos el state como un string vacio
    const [name, setName] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

  return (
    <div className="flex flex-col items-center p-8 space-y-6 bg-slate-50 min-h-[300px] rounded-2xl border border-slate-200">
        {/* Seccion del Input  */}
        <div className="w-full max-w-xs">
            <label className="block text-sm font-medium text-slate-700 mb-2">
                Escribe tu Nombre:
            </label>
            <input type="text" value={name} placeholder="Ejemplo: Ana" className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-all" onChange={handleChange} />
        </div>

        {/* Seccion Preview - Tarjeta Espejo  */}
        <div className={`p-6 w-full max-w-xs rounded-xl shadow-xl transition-all transform ${name ? 'bg-indigo-600 scale-105': 'bg-slate-300'}`}>
            <p className="text-xs text-indigo-200 uppercase tracking-widest font-semibold">
                Previsualizacion
            </p>
            <h2 className="text-2xl font-bold text-white mt-2 break-words">
                {name || "Esperando Nombre"}
            </h2>
        </div>

        {/* Boton de limpiar el nombre */}
        <button onClick={()=>setName('')} className="text-indigo-600 text-smn hover:underline">
            Limpiar Texto
        </button>
    </div>
  )
}

export default CardPreview