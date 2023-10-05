import React, { useEffect, useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ProductosData";
import "./Pages.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    fetchProductos();
    setTimeout(() => {
      setAlerta("");
    }, 3500);
  }, [alerta]);

  const fetchProductos = () => {
    fetch(urlApi, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.log(err));
  };

  const deleteProductos = (id) => {
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
        apiData={productos}
        objKeys={allKeys}
        apiFetch={() => fetchProductos()}
        deleteData={deleteProductos}
        title={"Productos"}
      />
    </div>
  );
}
