import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import "./Acordeon.css";

export default function Acordeon({ totalVenta, productos, cliente, fecha, numeroFactura }) {
  const [isAcordeonActive, setIsAcordeonActive] = useState(false);

  // totalVenta, array productos, cliente nombre, fecha, #factura
  return (
    <div>
      <div lassName="acordeon-item">
        <div
          className="acordeon-title"
          onClick={() => setIsAcordeonActive(!isAcordeonActive)}
        >
          <div>N° {numeroFactura}</div>
          <div>{cliente}</div>
          <div>{fecha}</div>
          <div>${totalVenta.toLocaleString()}</div>
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
            <table className="facturas-table">
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Nombre</th>
                  <th>Precio Uni.</th>
                  <th>$ Conj.</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prd, index) => (
                  <tr className="single-product product-row" key={index}>
                    <td>{prd.cantidad}</td>
                    <td>{prd.nombre}</td>
                    <td>${prd.precio.toLocaleString()}</td>
                    <td>${(prd.precio * prd.cantidad).toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="product-row">
                  <td></td>
                  <td></td>
                  <td>
                    <strong>TOTAL:</strong>
                  </td>
                  <td>
                    <strong>${totalVenta.toLocaleString()}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
