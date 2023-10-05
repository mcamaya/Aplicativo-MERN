import React, { useState, useEffect } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ProveedoresData";
import "./Pages.css";

export default function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    fetchProveedores();
    setTimeout(() => {
      setAlerta("");
    }, 3500);
  }, [alerta]);

  const fetchProveedores = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setProveedores(data))
      .catch((err) => console.log(err));
  };

  const deleteProveedores = (id) => {
    const token = localStorage.getItem("x-auth-token");
    fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((res) => setAlerta(res.msg))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      <div className={`alerta ${!alerta ? "ocultar" : ""}`}>{alerta}</div>
      <MainTable
        apiData={proveedores}
        objKeys={allKeys}
        apiFetch={() => fetchProveedores()}
        title={"Proveedores"}
        deleteData={deleteProveedores}
        rowClass={(registro) => {}}
      />
    </div>
  );
}
