export const urlApi = "http://localhost:8080/api/v1/productos";

export const allKeys = [
  {
    field: 'nombre',
    thead: 'Nombre'
  },
  {
    field: 'precio',
    thead: 'Precio',
    toLocale: true
  },
  {
    field: 'codigoInterno',
    thead: 'ID Interno.'
  },
  {
    field: 'categoria',
    thead: 'Categoría'
  },
  {
    field: `proveedor`,
    subfield:"nombre",
    thead: 'Proveedor'
  },
  {
    field: 'descripcion',
    thead: 'Descripción'
  },
  
]