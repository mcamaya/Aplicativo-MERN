import React, { useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ProveedoresData";

export default function Proveedores() {
  const [proveedores, setProveedores] = useState([]);

  const fetchProveedores = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setProveedores(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <MainTable
        apiData={proveedores}
        objKeys={allKeys}
        apiFetch={() => fetchProveedores()}
        title={"Proveedores"}
      />
    </div>
  );
}
