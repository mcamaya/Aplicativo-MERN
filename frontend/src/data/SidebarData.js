import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidReceipt } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";

const SidebarData = [
  {
    title: "Clientes",
    path: "/clientes",
    class: "nav-text",
    icon: <BsFillPersonFill />,
  },
  {
    title: "Proveedores",
    path: "/proveedores",
    class: "nav-text",
    icon: <FaTruck />,
  },
  {
    title: "Productos",
    path: "/productos",
    class: "nav-text",
    icon: <FaShoppingCart />,
  },
  {
    title: "Facturas",
    path: "/facturas",
    class: "nav-text",
    icon: <BiSolidReceipt />,
  },
  {
    title: "Inventario",
    path: "/inventario",
    class: "nav-text",
    icon: <BsFillBoxSeamFill />,
  },
];

export default SidebarData;
