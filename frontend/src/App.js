import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Productos from "./pages/Productos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="clientes" element={<Clientes/>}> {/* mostrar clientes */} </Route> 
      <Route path="proveedores" element={<Proveedores/>}> </Route> 
      <Route path="productos" element={<Productos/>}> </Route> 
      <Route path="facturas" element={<Productos/>}> </Route> 
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
