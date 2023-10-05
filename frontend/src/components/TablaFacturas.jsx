import React, { useState } from "react";
import { TableBody, Table, Button, TableCell } from "semantic-ui-react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import "./TablaFacturas.css";

export default function TablaFacturas({ apiData, apiFetch }) {
  const [precioFinal, setPrecioFinal] = useState(0);
  const [isAcordeonActive, setIsAcordeonActive] = useState(false);

  const example = {
    _id: "DXo7S2R9n0uGFd31T6LFL",
    numeroFactura: 1,
    clienteId: {
      _id: "-2X1Ir6EaIzcEhUQYjZZv",
      nombre: "William Santamaria",
    },
    productosIds: [
      {
        cantidad: 3,
        _id: "zfdd_Oe96KZXlCFAlUnqu",
        nombre: "Mi Otro PRD",
        precio: 50000,
      },
      {
        cantidad: 1,
        _id: "rjRk5a4ZNfmVKSayMcod3",
        nombre: "y otro masss....",
        precio: 50000,
      },
      {
        cantidad: 3,
        _id: "wVursJSf1aCPeJx_OnsoL",
        nombre: "Mi Producto",
        precio: 50000,
      },
    ],
    fecha: "2023-08-07",
    iva: 19,
    descuento: 0,
  };

  return (
    <div className="acordeones-container">
      <div className="acordeon">
        <div lassName="acordeon-item">
          <div
            className="acordeon-title"
            onClick={() => setIsAcordeonActive(!isAcordeonActive)}
          >
            <div>{example.numeroFactura}</div>
            <div>{example.clienteId.nombre}</div>
            <div>{example.fecha}</div>
            <div>
              {isAcordeonActive ? (
                <AiFillMinusCircle />
              ) : (
                <BsFillPlusCircleFill />
              )}
            </div>
          </div>
          {isAcordeonActive && (
            <div className="acordeon-content">
              <table>
                      <thead>
                        <tr>
                          <th>Cantidad</th>
                          <th>Nombre</th>
                          <th>Precio Uni.</th>
                          <th>$ Conj.</th>
                        </tr>
                      </thead>
                      <tbody>

              {example.productosIds.map((prd, index) => (
                <tr className="single-product" key={index}>
                  <td>{prd.cantidad}</td>
                  <td>{prd.nombre}</td>
                  <td>${prd.precio.toLocaleString()}</td>
                  <td>${(prd.precio * prd.cantidad).toLocaleString()}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td><strong>TOTAL:</strong></td>
                <td></td>
              </tr>
                      </tbody>
                    </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
