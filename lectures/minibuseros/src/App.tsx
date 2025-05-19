import { useState } from "react";
import "./App.css";

function App() {
  const [refran, setRefran] = useState("");
  const [refranes, setRefranes] = useState([]);

  const addRefran = () => {
    setRefranes((prevRefranes) => [...prevRefranes, refran]);
    setRefran("");
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex-col" >
          <h1 className="text-2xl font-bold mb-4">
            Refranes de nuestros amigos Minibuseros
          </h1>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="bg-gray-200 border-gray-300 flex shadow-sm width-full p-2 rounded-md"
              placeholder="Ingrese las palabras sabias del minibusero"
              maxLength={50}
              value={refran}
              onChange={(e) => setRefran(e.target.value)}
            />
            <button
              className="bg-blue-500 rounded-md hover:cursor-pointer text-white p-2"
              onClick={addRefran}
            >
              Ingresar Refran
            </button>
          </div>
          <div>
            refranes:
            {refranes.map((refran) => {
              return (
                <div
                  key={refran}
                  className="bg-white 
                            border 
                            border-gray-300 
                            p-4 rounded-md 
                            shadow-md mb-2"
                >
                  {refran}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
