import React from "react";
//components
import FormProductos from "./FormProductos";
import TablaDeProductos from "./TablaDeProductos";
import TotalFactura from "./TotalFactura";
//hooks
import useDatosFactura from "../../hooks/datosFactura";

const FormFactura = () => {
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
    //datos del cliente y factura
    const [datosFactura, setDatosFactura] = useDatosFactura(DOC_TIPO, TYPE_CBT);

    const handleDatosFactura = (e) => {
        setDatosFactura({
            ...datosFactura,
            [e.target.name]: e.target.value,
        });
    };

    const addProduct = (product) => {
        const sumarTotal = (numero, attr) =>
            datosFactura[attr] + Number(numero);

        setDatosFactura({
            ...datosFactura,
            productos: [...datosFactura.productos, product],
            total: sumarTotal(product.subtotal, "total"),
            iva: sumarTotal(product.ivaMonto, "iva"),
            baseImp: sumarTotal(product.baseImponible, "baseImp"),
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
            baseImp: restarTotal(product.baseImponible, "baseImp"),
        });
    };

    return (
        <div>
            <div className='container'>
                <h3>Datos del cliente</h3>
                <div className='row'>
                    <div className='col-12 col-md-6 mt-4'>
                        <label htmlFor='type' className='form-label'>
                            Tipo de comprobante
                        </label>
                        <select
                            className='form-select'
                            name='cbteTipo'
                            onChange={handleDatosFactura}
                        >
                            {TYPE_CBT.map((type) => (
                                <option key={`cbt-${type.Id}`} value={type.Id}>
                                    {type.Desc}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-12 col-md-6 mt-4'>
                        <label htmlFor='type' className='form-label'>
                            Provincia
                        </label>
                        <select
                            className='form-select'
                            name='cbteTipo'
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
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-2 mt-4'>
                        <label htmlFor='docTipo' className='form-label'>
                            Doc. Tipo
                        </label>
                        <select
                            className='form-select'
                            name='docTipo'
                            onChange={handleDatosFactura}
                        >
                            {DOC_TIPO.map((type) => (
                                <option key={`doc-${type.Id}`} value={type.Id}>
                                    {type.Desc}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-12 col-md-4 mt-4'>
                        <label htmlFor='nombre' className='form-label'>
                            Numero
                        </label>
                        {parseInt(datosFactura.docTipo) === 99 ? (
                            <input
                                type='number'
                                className='form-control'
                                name='docNro'
                                placeholder='Consumidor Final'
                                disabled
                            ></input>
                        ) : (
                            <input
                                type='number'
                                className='form-control'
                                name='docNro'
                                onChange={handleDatosFactura}
                            ></input>
                        )}
                    </div>
                    <div className='col-12 col-md-6 mt-4'>
                        <label htmlFor='nombre' className='form-label'>
                            Nombre o Razón social
                        </label>
                        {parseInt(datosFactura.docTipo) === 99 ? (
                            <input
                                type='text'
                                className='form-control'
                                name='nombre'
                                placeholder='Consumidor Final'
                                disabled
                            ></input>
                        ) : (
                            <input
                                type='text'
                                className='form-control'
                                name='nombre'
                                onChange={handleDatosFactura}
                            ></input>
                        )}
                    </div>
                </div>
                <hr />

                <h3>Productos</h3>
                <div className='row mt-4'>
                    <FormProductos
                        IVA={IVA}
                        addProduct={addProduct}
                    ></FormProductos>
                </div>
                <div className='row mt-4'>
                    <button
                        className='btn btn-primary col-12'
                        onClick={() => {
                            console.log(datosFactura);
                        }}
                    >
                        Facturar
                    </button>
                </div>
                <div className='row overflow-scroll'>
                    <div className='col'>
                        <TablaDeProductos
                            productos={datosFactura.productos}
                            deleteProducts={deleteProducts}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <TotalFactura datosFactura={datosFactura} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormFactura;
