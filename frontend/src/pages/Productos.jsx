import React, { useState } from "react";
import MainTable from "../components/MainTable";
import { urlApi, allKeys } from "../data/ProductosData";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  const fetchProductos = () => {
    fetch(urlApi, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => setProductos(data))
      
      .catch((err) => console.log(err));
  };

/*   const deleteProductos = (id) => {
    const token = localStorage.getItem('x-auth-token')
    fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'x-auth-token': token
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }; */

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
