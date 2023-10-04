import React, { useState, useEffect } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ClientesData";
import './Pages.css';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  const [alerta, setAlerta] = useState('');
  const toggleAlerta = (msg) => {
    setAlerta(msg);
  };

  useEffect(() => {
    fetchClientes();
    setTimeout(() => {
      setAlerta("");
    }, 3500);
  }, [alerta]);

  const fetchClientes = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.log(err));
  };
  const deleteClientes = (id) => {
    const token = localStorage.getItem("x-auth-token");
    fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((res) => toggleAlerta(res.msg))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      <div className={`alerta ${!alerta ? "ocultar" : ""}`}>{alerta}</div>
      <MainTable
        apiData={clientes}
        objKeys={allKeys}
        apiFetch={() => fetchClientes()}
        title={"Clientes"}
        deleteData={deleteClientes}
      />
    </div>
  );
}
