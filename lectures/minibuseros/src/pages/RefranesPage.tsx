import { useState } from "react";
import { TitleComponent } from "../components/TitleComponent";
import { FormComponent } from "../components/FormComponent";
import { ListComponent } from "../components/ListComponent";

function RefranesPage() {
  const [refran, setRefran] = useState("");
  const [refranes, setRefranes] = useState([]);

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
