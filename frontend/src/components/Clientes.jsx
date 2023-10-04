import React, { useState } from "react";
import MainTable from "./MainTable";

const allKeys = [
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
const urlApi = "http://localhost:8080/api/v1/clientes";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  const fetchClientes = () => {
    fetch(urlApi)
    .then((res) => res.json())
    .then((data) => setClientes(data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <MainTable apiData={clientes} objKeys={allKeys} apiFetch={() => fetchClientes()} title={"Clientes"} />
    </div>
  );
}
