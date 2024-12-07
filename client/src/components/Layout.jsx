import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Toaster position="bottom-center"/>
      <Footer />
    </div>
  );
};

export default Layout;
