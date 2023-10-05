import React, { useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/FacturasData";
import TablaFacturas from "../components/TablaFacturas";

export default function Facturas() {
  const [facturas, setFacturas] = useState([]);

  const fetchFacturas = () => {
    const token = localStorage.getItem('x-auth-token')
    fetch(urlApi, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    })
      .then((res) => res.json())
      .then((data) => setFacturas(data))
      
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TablaFacturas
        apiData={facturas}
        objKeys={allKeys}
        apiFetch={() => fetchFacturas()}
        title={"Facturas"}
        rowClass={(registro) => {}}
      />
    </div>
  );
}
