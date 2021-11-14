import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Modal, Button } from "react-bootstrap";

import Boleta from "./Boleta";

const ModalBoleta = (props) => {
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
                <Button
                    variant='secondary'
                    onClick={() => props.handleModal(false)}
                >
                    Descargar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalBoleta;
