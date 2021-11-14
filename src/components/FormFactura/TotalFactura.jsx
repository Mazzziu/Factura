import React from "react";
import { Stack, Badge } from "react-bootstrap";

const TotalFactura = ({ datosFactura }) => {
    return (
        <Stack direction='horizontal' gap={3}>
            <div className='ms-auto fs-4'>
                <Badge bg='secondary' className='p-2'>
                    {datosFactura.hasOwnProperty("neto")
                        ? `NETO $${new Intl.NumberFormat("es-AR").format(
                              Number(datosFactura.neto)
                          )}`
                        : 0}
                </Badge>
                <span> + </span>
                <Badge bg='secondary' className='p-2'>
                    {datosFactura.hasOwnProperty("iva")
                        ? `IVA $${new Intl.NumberFormat("es-AR").format(
                              Number(datosFactura.iva)
                          )}`
                        : 0}
                </Badge>
                <span> = </span>
                <Badge bg='primary' className='p-2'>
                    {datosFactura.hasOwnProperty("total")
                        ? `TOTAL $${new Intl.NumberFormat("es-AR").format(
                              Number(datosFactura.total)
                          )}`
                        : 0}
                </Badge>
            </div>
        </Stack>
    );
};

export default TotalFactura;
