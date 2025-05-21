import { useState, useEffect } from "react";
import { TitleComponent } from "../components/TitleComponent";
import { FormComponent } from "../components/FormComponent";
import { ListComponent } from "../components/ListComponent";

function RefranesPage() {
  const [refran, setRefran] = useState("");
  const [refranes, setRefranes] = useState([]);
  // Cualquier cambio dentro del RefranesPage llama al useEffect
  // CUIDADO NO USAR !!!!!!!!!! POR FAVORCITO
  
  useEffect(() =>{
    console.log("RefranesPage mounted");
  });
  // Mucho cuidado el useEffect no puede ser una funcion asincrona

  useEffect( ()=>{
    console.log("Solo me ejecuto la primera vez ")
  }, []);

  useEffect( ()=>{
    console.log("Se va llamar cuando exista algun cambio en el estado refran")
  }, [refran, refranes]);


  useEffect( ()=>{
    // La funcion de abajo se ejecuta al cambiar de Componente o Page.
    return () => {
      console.log("Se va llamar cuando se desmonte el componente");
    }
  }, [refran, refranes]);


  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex-col">
          <TitleComponent
            title="Refranes de nuestros amigos Minibuseros"
            stylesTitle="text-blue-500"
            styles={{ textWeight: "bolder" }}
          />
          <FormComponent
            refran={refran}
            setRefran={setRefran}
            setRefranes={setRefranes}
          />
          <ListComponent refranes={refranes} />
        </div>
      </div>
    </>
  );
}

export default RefranesPage;
