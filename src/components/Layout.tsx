import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout: React.FC = () => {
  return (
    <div className="d-md-flex">
      <Sidebar />
      <main className="w-100 vh-100 overflow-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
