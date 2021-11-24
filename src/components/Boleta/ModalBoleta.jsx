import React from "react";
import { PDFViewer, PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import { Modal, Button } from "react-bootstrap";

import Boleta from "./Boleta";

const ModalBoleta = (props) => {
    const [instance, updateInstance] = usePDF({ document: Boleta });
    return (
        <Modal
            size='lg'
            show={props.show}
            onHide={() => props.handleModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Factura Lista!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PDFViewer width='100%' height='600px'>
                    <Boleta datosFactura={props.datosFactura} qr={props.qr} />
                </PDFViewer>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='success'
                    onClick={() => props.handleModal(false)}
                >
                    Aceptar
                </Button>
                <PDFDownloadLink
                    className='btn btn-secondary'
                    document={
                        <Boleta
                            datosFactura={props.datosFactura}
                            qr={props.qr}
                        />
                    }
                    fileName={`${props.datosFactura.cbteTipo.Desc} [${props.datosFactura.provincia}] ${props.datosFactura.nombre}.pdf`}
                >
                    {({ blob, url, loading, error }) => {
                        console.log(error);
                        return loading ? "Loading document..." : "Descargar";
                    }}
                </PDFDownloadLink>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalBoleta;
