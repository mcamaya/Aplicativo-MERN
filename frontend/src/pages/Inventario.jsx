import React, { useState, useEffect } from "react";
import { allKeys, urlApi } from "../data/InventarioData";
import MainTable from "../components/MainTable";

export default function Inventario() {
  const [inventario, setInventario] = useState([]);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    fetchInventario();
    setTimeout(() => {
      setAlerta("");
    }, 3500);
  }, [alerta]);

  const deleteInventario = (id) => {

    fetch(`${urlApi}/${id}`, {
      method: "PATCH",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
      },
      body: {
        "stockDisponible": 0,
      },
    })
      .then(setAlerta('Producto sin inventario'))
      .catch((err) => console.log(err));
  };
  

  const fetchInventario = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setInventario(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      <div className={`alerta ${!alerta ? "ocultar" : ""}`}>{alerta}</div>
      <MainTable
        apiData={inventario} //data de la API
        objKeys={allKeys} //en qué campos debe buscar y como llamar encabezados de la tabla
        apiFetch={() => fetchInventario()}
        deleteData={deleteInventario}
        title={"Inventario"}
        rowClass={(registro) => {
          //clase personalizada de cada fila de la tabla
          if (registro.stockDisponible < registro.stockMinimo) {
            return "stock-bajo";
          }
        }}
      />
    </div>
  );
}
