import React from "react";

const TotalFactura = ({ datosFactura }) => {
    return (
        <React.Fragment>
            <span>TOTAL FACTURA</span>
            <h3>
                {datosFactura.hasOwnProperty("baseImp")
                    ? `$${new Intl.NumberFormat("es-AR").format(
                          Number(datosFactura.baseImp)
                      )}`
                    : 0}
            </h3>
            <h3>
                {datosFactura.hasOwnProperty("iva")
                    ? `$${new Intl.NumberFormat("es-AR").format(
                          Number(datosFactura.iva)
                      )}`
                    : 0}
            </h3>
            <hr />
            <h3>
                {datosFactura.hasOwnProperty("total")
                    ? `$${new Intl.NumberFormat("es-AR").format(
                          Number(datosFactura.total)
                      )}`
                    : 0}
            </h3>
        </React.Fragment>
    );
};

export default TotalFactura;
