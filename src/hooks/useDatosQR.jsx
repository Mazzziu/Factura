import { useState } from "react";

const useDatosQR = () => {
    const [datosQR, setDatosQR] = useState({
        ver: 1, //version de los datos [default 1]
        fecha: "",
        cuit: 20394132064,
        ptoVta: 5,
        tipoCmp: 6, //6 factura B
        nroCmp: 0,
        importe: 0,
        moneda: "PES",
        ctz: 1, //cotizacion de la moneda utilizada
        tipoDocRec: 99, //de corresponder 99 consumidor final
        nroDocRec: 0, //de corresponder
        tipoCodAut: "E", //E para comprobantes CAE y A para comprobantes CAEA
        codAut: 70417054367476,
    });
    return [datosQR, setDatosQR];
};

export default useDatosQR;
