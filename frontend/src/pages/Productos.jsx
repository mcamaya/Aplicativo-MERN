import React, { useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ProductosData";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  const fetchProductos = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <MainTable
        apiData={productos}
        objKeys={allKeys}
        apiFetch={() => fetchProductos()}
        title={"Productos"}
      />
    </div>
  );
}
