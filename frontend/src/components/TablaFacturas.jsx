import React, { useState, useEffect } from "react";
import { TableBody, Table, Button, TableCell } from "semantic-ui-react";
import Acordeon from "./Acordeon";
import "./TablaFacturas.css";

export default function TablaFacturas({ apiData, apiFetch, title }) {
  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div className="facturas-container">
    <h2>{title}</h2>
      <div className="acordeones-container">
        {console.log(apiData)}
        {apiData.map((fct, index) => (
          <Acordeon
            key={index}
            totalVenta={fct.totalVenta}
            productos={fct.productosIds}
            cliente={fct.clienteId.nombre}
            fecha={fct.fecha}
            numeroFactura={fct.numeroFactura}
          />
        ))}
      </div>
    </div>
  );
}
