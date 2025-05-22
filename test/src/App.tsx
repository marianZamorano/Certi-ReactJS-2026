import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [phrase, setPhrase] = useState<string>('')         // Input actual
  const [phrases, setPhrases] = useState<string[]>([])     // Lista de refranes

  const addPhrase = () => {
    if (phrase.trim() === '') return
    setPhrases([...phrases, phrase.trim()])
    setPhrase('') // Limpia el input
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-16 mx-2" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-16 mx-2" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Refranes de Minibuseros
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <input
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="Ej: Suba pa’ que se baje"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <button
          onClick={addPhrase}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agregar refrán
        </button>
      </div>

      {phrases.length > 0 && (
        <div className="max-w-md mx-auto mt-6 space-y-2">
          {phrases.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-3 rounded shadow-sm"
            >
              {p}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
