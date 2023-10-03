import React from "react";
import "./Dashboard.css";
import MainTable from "./MainTable";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="contenido">
        <h2>Clientes</h2>
        
        <MainTable />

      </div>
    </div>
  );
}
