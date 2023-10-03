import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import MainTable from "./MainTable";

export default function Clientes() {
  const urlApi = "http://localhost:8080/api/v1/clientes";
  const [clientes, setClientes] = useState([]);

  const allKeys2 = [
    {
      field: "nombre", // field = nombre del campo en la db
      thead: "Nombre", // thead = nombre que se quiere se muestre en la tabla
    },
    {
      field: "numeroDocumento",
      thead: "N° Documento",
    },
    {
      field: "celular",
      thead: "Celular",
    },
    {
      field: "email",
      thead: "Email",
    },
    {
      field: "direccion",
      thead: "Dirección",
    },
    {
      field: "tipoDocumento",
      thead: "Tipo de Documento",
    },
  ];

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(clientes);

  return (
    <div>
      {/* {<MainTable dataKeys={allKeys2} dataAPI={clientes} />} */}

    </div>
  );
}
