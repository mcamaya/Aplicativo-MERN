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
import Facturas from "./pages/Facturas";
import Inventario from "./pages/Inventario";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="home" element={<Home/>}></Route> 
      <Route path="clientes" element={<Clientes/>}></Route> 
      <Route path="proveedores" element={<Proveedores/>}> </Route> 
      <Route path="productos" element={<Productos/>}> </Route> 
      <Route path="facturas" element={<Facturas/>}> </Route> 
      <Route path="inventario" element={<Inventario/>}> </Route> 
      <Route path="login" element={<Login/>}> </Route> 
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
