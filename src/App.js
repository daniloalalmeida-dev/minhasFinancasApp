import React from "react";

import "bootswatch/dist/flatly/bootstrap.css";
import "./custom.css";
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'
import MainRoutes from "./routes";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
