import { useState } from "react";
import moment from "moment";

const useDatosFactura = (DOC_TIPO, TYPE_CBT) => {
    //valores default
    const [datosFactura, setDatosFactura] = useState({
        nombre: "Consumidor Final",
        docNro: 0,
        docTipo: DOC_TIPO[0],
        cbteTipo: TYPE_CBT[0],
        provincia: "Buenos Aires",
        fecha: moment().subtract(5, "d")._d,
        productos: [],
        neto: 0,
        iva: 0,
        total: 0,
    });
    return [datosFactura, setDatosFactura];
};

export default useDatosFactura;
