import React from "react";
import "./App.css";

import FormFactura from "./components/FormFactura/FormFactura";

function App() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col'>
                    <FormFactura></FormFactura>
                </div>
            </div>
        </div>
    );
}

export default App;
