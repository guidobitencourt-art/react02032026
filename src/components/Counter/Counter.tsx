import { useState } from "react"; //Siempre debemos importarla


const Counter = () => {
    //Definimos Estado
    const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 border border-gray-200">
        <h2 className="text-xl font-medium text-black"> Mi Contador </h2>

        <p className="text-4xl font-bold text-indigo-600">{count}</p>

        <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-red-600 transition" onClick={()=>setCount(count-1)}>
                Decrement
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={()=>setCount(count + 1)}>
                Add
            </button>
            <button className="text-sm text-gray-500 underline" onClick={()=>setCount(0)}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter