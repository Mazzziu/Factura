import React, { useState } from "react";
import "./App.css";
import FormFactura from "./components/FormFactura/FormFactura";
import AlertDanger from "./components/AlertDanger";

function App() {
    const [alert, setAlert] = useState(false);
    const [dataAlert, setDataAlert] = useState({
        title: "Null",
        body: "Null",
    });
    return (
        <div className='container mt-4 position-relative'>
            <AlertDanger
                className='position-absolute t-5'
                show={alert}
                setShow={setAlert}
                title={dataAlert.title}
                body={dataAlert.body}
            />
            <div className='row'>
                <div className='col'>
                    <FormFactura
                        setAlert={setAlert}
                        setDataAlert={setDataAlert}
                    ></FormFactura>
                </div>
            </div>
        </div>
    );
}

export default App;
