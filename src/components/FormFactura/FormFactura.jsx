import React, { useRef, useState } from "react";
import moment from "moment";
import axios from "axios";

//components
import FormProductos from "./FormProductos";
import TablaDeProductos from "./TablaDeProductos";
import TotalFactura from "./TotalFactura";
import ModalBoleta from "../Boleta/ModalBoleta";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Button } from "react-bootstrap";

//hooks
import useDatosFactura from "../../hooks/useDatosFactura";
import useDatosQR from "../../hooks/useDatosQR";

const FormFactura = (props) => {
    const TYPE_CBT = [
        {
            Id: 6,
            Desc: "Factura B",
        },
        {
            Id: 1,
            Desc: "Factura A",
        },
        {
            Id: 2,
            Desc: "Nota de Débito A",
        },
        {
            Id: 3,
            Desc: "Nota de Crédito A",
        },
        {
            Id: 7,
            Desc: "Nota de Débito B",
        },
        {
            Id: 8,
            Desc: "Nota de Crédito B",
        },
    ];
    const DOC_TIPO = [
        {
            Id: 96,
            Desc: "DNI",
        },
        {
            Id: 80,
            Desc: "CUIT",
        },
        {
            Id: 86,
            Desc: "CUIL",
        },
        {
            Id: 99,
            Desc: "Consumidor Final",
        },
    ];
    const IVA = [
        {
            Id: "5",
            Desc: "21%",
            value: 0.21,
        },
        {
            Id: "4",
            Desc: "10.5%",
            value: 0.105,
        },
    ];
    const PROVINCIAS = [
        { Id: 0, Desc: "Buenos Aires" },
        { Id: 1, Desc: "Capital Federal" },
        { Id: 2, Desc: "Catamarca" },
        { Id: 3, Desc: "Chaco" },
        { Id: 4, Desc: "Chubut" },
        { Id: 5, Desc: "Cordoba" },
        { Id: 6, Desc: "Corrientes" },
        { Id: 7, Desc: "Entre Rios" },
        { Id: 8, Desc: "Formosa" },
        { Id: 9, Desc: "Jujuy" },
        { Id: 10, Desc: "La Pampa" },
        { Id: 11, Desc: "La Rioja" },
        { Id: 12, Desc: "Mendoza" },
        { Id: 13, Desc: "Misiones" },
        { Id: 14, Desc: "Neuquen" },
        { Id: 15, Desc: "Rio Negro" },
        { Id: 16, Desc: "Salta" },
        { Id: 17, Desc: "San Juan" },
        { Id: 18, Desc: "San Luis" },
        { Id: 19, Desc: "Santa Cruz" },
        { Id: 20, Desc: "Santa Fe" },
        { Id: 21, Desc: "Santiago del Estero" },
        { Id: 22, Desc: "Tierra del Fuego" },
        { Id: 23, Desc: "Tucuman" },
    ];
    // const URL = "https://backend-facturalin.herokuapp.com/api/";
    //const URL = "https://backend-facturalin.herokuapp.com/api/test/";
    const URL = "https://backend-facturalin.herokuapp.com/api/";

    //states
    const [datosFactura, setDatosFactura] = useDatosFactura(DOC_TIPO, TYPE_CBT);
    const [qr, setQr] = useState(""); //qr final que se pasa al modal
    const [datosQR, setDatosQR] = useDatosQR(); //armado de datos del qr a transformar en base 64
    const [startDate, setStartDate] = useState(moment().subtract(5, "d")._d);
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    //Ref
    const docNro = useRef();
    const nombre = useRef();
    const sinProd = useRef();

    //handles
    const handleDatosFactura = (e) => {
        if (e.target.name === "cbteTipo" || e.target.name === "docTipo") {
            setDatosFactura({
                ...datosFactura,
                [e.target.name]: JSON.parse(e.target.value),
            });
        } else {
            setDatosFactura({
                ...datosFactura,
                [e.target.name]: e.target.value,
            });
        }
    };
    const handleModal = (value) => setOpenModal(value);
    //end-handles

    const addProduct = (product) => {
        const sumarTotal = (numero, attr) =>
            datosFactura[attr] + Number(numero);

        setDatosFactura({
            ...datosFactura,
            productos: [...datosFactura.productos, product],
            total: sumarTotal(product.subtotal, "total"),
            iva: sumarTotal(product.ivaMonto, "iva"),
            neto: sumarTotal(product.neto, "neto"),
        });
    };
    const deleteProducts = (product, pos) => {
        const restarTotal = (numeroARestar, attr) =>
            Number(datosFactura[attr]) - Number(numeroARestar);

        const aux = datosFactura.productos.filter((product, index) => {
            if (index !== pos) {
                return product;
            }
        });
        setDatosFactura({
            ...datosFactura,
            productos: aux,
            total: restarTotal(product.subtotal, "total"),
            iva: restarTotal(product.ivaMonto, "iva"),
            neto: restarTotal(product.neto, "neto"),
        });
    };

    //start-validates
    const validarDocNro = () => {
        let valid = true;
        if (datosFactura.docTipo.Id == 99) {
            return true;
        } else if (
            datosFactura.docTipo.Id == 80 ||
            datosFactura.docTipo.Id == 86
        ) {
            let cuit = require("arg.js").cuit;
            valid = cuit.isValid(datosFactura.docNro);
        } else if (datosFactura.docTipo.Id == 96) {
            let doc = require("arg.js").document;
            valid = doc.isValidDni(datosFactura.docNro);
        }
        if (docNro.current.value == "" || valid === false) {
            docNro.current.classList.add("is-invalid");
            return false;
        } else {
            docNro.current.classList.remove("is-invalid");
            docNro.current.classList.add("is-valid");
            return true;
        }
    };
    const validarNombre = () => {
        if (datosFactura.docTipo.Id == 99) {
            return true;
        }
        if (nombre.current.value == "") {
            nombre.current.classList.add("is-invalid");
            return false;
        } else {
            nombre.current.classList.remove("is-invalid");
            nombre.current.classList.add("is-valid");
            return true;
        }
    };
    const validarProductos = () => {
        if (datosFactura.productos.length === 0) {
            sinProd.current.classList.add("bg-danger");
            sinProd.current.classList.add("bg-danger");
            return false;
        } else {
            return true;
        }
    };
    //end-validates

    const generarFactura = () => {
        const QR = require("qrcode");
        if (validarDocNro() && validarNombre() && validarProductos()) {
            setLoading(true);
            axios
                .post(URL + "fe-createVoucher", {
                    cbteTipo: datosFactura.cbteTipo.Id,
                    concepto: 1,
                    docTipo: datosFactura.docTipo.Id,
                    docNro: datosFactura.docNro,
                    fecha: moment(datosFactura.fecha).format("YYYYMMDD"),
                    impTotal: datosFactura.total,
                    impNeto: datosFactura.neto,
                    iva: datosFactura.iva,
                })
                .then((response) => {
                    if (response.data.error) {
                        throw new Error(response.data.error);
                    }
                    setLoading(false);
                    setDatosFactura({
                        ...datosFactura,
                        cae: response.data.CAE,
                        nroCmp: response.data.voucherNumber,
                        caeVto: response.data.CAEFchVto,
                    });

                    setDatosQR({
                        fecha: moment(datosFactura.fecha).format("YYYYMMDD"),
                        ptoVta: 5,
                        tipoCmp: datosFactura.cbteTipo,
                        nroCmp: datosFactura.nroCmp,
                        importe: datosFactura.total,
                        tipoDocRec: datosFactura.docTipo,
                        nroDocRec: datosFactura.docNro,
                        codAut: datosFactura.cae,
                    });
                    const btoa = (str) =>
                        new Buffer.from(str).toString("base64");
                    QR.toDataURL(
                        "https://www.afip.gob.ar/fe/qr/?p=" +
                            btoa(JSON.stringify(datosQR)),
                        function (err, url) {
                            setQr(url);
                        }
                    );
                    handleModal(true);
                })
                .catch((err) => {
                    props.setAlert(true);
                    setLoading(false);
                    props.setDataAlert({
                        title: "Ups! algo salio mal...",
                        body: err.message,
                    });
                });
        }
    };

    return (
        <Container>
            <h3>Datos del cliente</h3>
            <Row>
                <Col xs={12} md={4} className='mt-4'>
                    <label htmlFor='type' className='form-label'>
                        Tipo de comprobante
                    </label>
                    <select
                        className='form-select'
                        name='cbteTipo'
                        onChange={handleDatosFactura}
                    >
                        {TYPE_CBT.map((type) => (
                            <option
                                key={`cbt-${type.Id}`}
                                value={JSON.stringify(type)}
                            >
                                {type.Desc}
                            </option>
                        ))}
                    </select>
                </Col>
                <Col xs={12} md={4} className='mt-4'>
                    <label htmlFor='type' className='form-label'>
                        Provincia
                    </label>
                    <select
                        className='form-select'
                        name='provincia'
                        onChange={handleDatosFactura}
                    >
                        {PROVINCIAS.map((type) => (
                            <option
                                key={`provincia-${type.Id}`}
                                value={type.Desc}
                            >
                                {type.Desc}
                            </option>
                        ))}
                    </select>
                </Col>
                <Col xs={12} md={4} className='mt-4'>
                    <label htmlFor='type' className='form-label'>
                        Fecha
                    </label>
                    <DatePicker
                        name='fecha'
                        className='form-control'
                        dateFormat='dd/MM/yyyy'
                        selected={startDate}
                        minDate={moment().subtract(5, "d")._d}
                        maxDate={moment().add(5, "d")._d}
                        onChange={(date) => {
                            setStartDate(date);
                            setDatosFactura({
                                ...datosFactura,
                                fecha: date,
                            });
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2} className='mt-4'>
                    <label htmlFor='docTipo' className='form-label'>
                        Doc. Tipo
                    </label>
                    <select
                        className='form-select'
                        name='docTipo'
                        onChange={handleDatosFactura}
                    >
                        {DOC_TIPO.map((type) => (
                            <option
                                key={`doc-${type.Id}`}
                                value={JSON.stringify(type)}
                            >
                                {type.Desc}
                            </option>
                        ))}
                    </select>
                </Col>
                <Col xs={12} md={4} className='mt-4'>
                    <label htmlFor='docNro' className='form-label'>
                        Numero
                    </label>
                    {parseInt(datosFactura.docTipo.Id) === 99 ? (
                        <input
                            type='number'
                            className='form-control'
                            name='docNro'
                            placeholder='Consumidor Final'
                            value={0}
                            disabled
                        ></input>
                    ) : (
                        <input
                            type='number'
                            ref={docNro}
                            className='form-control'
                            name='docNro'
                            autoComplete='off'
                            onChange={handleDatosFactura}
                        ></input>
                    )}
                </Col>
                <Col xs={12} md={6} className='mt-4'>
                    <label htmlFor='nombre' className='form-label'>
                        Nombre o Razón social
                    </label>
                    {parseInt(datosFactura.docTipo.Id) === 99 ? (
                        <input
                            type='text'
                            className='form-control'
                            name='nombre'
                            placeholder='Consumidor Final'
                            value='Consumidor Final'
                            disabled
                        ></input>
                    ) : (
                        <input
                            type='text'
                            ref={nombre}
                            className='form-control'
                            name='nombre'
                            required
                            onChange={handleDatosFactura}
                        ></input>
                    )}
                </Col>
            </Row>
            <hr />
            <h3>Productos</h3>
            <Row className='mt-4'>
                <FormProductos
                    IVA={IVA}
                    addProduct={addProduct}
                ></FormProductos>
            </Row>

            <Row>
                <Col className='overflow-scroll'>
                    <TablaDeProductos
                        productos={datosFactura.productos}
                        deleteProducts={deleteProducts}
                        sinProd={sinProd}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TotalFactura datosFactura={datosFactura} />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Button
                    type='button'
                    variant='primary'
                    onClick={generarFactura}
                    disabled={loading}
                >
                    {loading ? "Enviando datos..." : " Generar Factura"}
                </Button>
            </Row>

            <ModalBoleta
                show={openModal}
                handleModal={handleModal}
                datosFactura={datosFactura}
                qr={qr}
            />
        </Container>
    );
};

export default FormFactura;
