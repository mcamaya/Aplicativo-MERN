export const urlApi = "http://localhost:8080/api/v1/inventario";

export const allKeys = [
  {
    field: 'producto',
    subfield: 'nombre',
    thead: 'Producto'
  },
  {
    field: 'producto',
    subfield: 'precio',
    thead: 'Precio',
    toLocaleStr: true
  },
  {
    field: 'stockDisponible',
    thead: 'Stock'
  },
  {
    field: 'stockMinimo',
    thead: 'Min.'
  },
]