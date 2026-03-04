import { useState } from 'react'

const Interruptor = () => {
    const [on, setOn] = useState(false)


  return (
    <div className={`p-10 flex flex-col items-center transition-colors ${on ? 'bg-yellow-100': 'bg-gray-100'}`}>
        <button className={`px-6 py-2 rounded-full font-bold text-white ${on ? 'bg-red-500' : 'bg-blue-500' }`} onClick={() => setOn(!on)}>
            {on ? 'Apagar' : 'Encender'}
        </button>
    </div>
  )
}

export default Interruptor