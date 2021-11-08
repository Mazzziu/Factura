import { useState } from "react";

const useDatosFactura = (DOC_TIPO, TYPE_CBT) => {
    //valores default
    const [datosFactura, setDatosFactura] = useState({
        docTipo: DOC_TIPO[0].Id,
        cbteTipo: TYPE_CBT[0].Id,
        provincia: "Buenos Aires",
        productos: [],
        baseImp: 0,
        iva: 0,
        total: 0,
    });
    return [datosFactura, setDatosFactura];
};

export default useDatosFactura;
