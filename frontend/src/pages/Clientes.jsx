import React, { useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ClientesData";

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
