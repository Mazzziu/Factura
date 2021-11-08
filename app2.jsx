import React, { useState, useEffect } from "react";
import "./App.css";
import Boleta from "./components/Boleta/boleta";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
    //datos del cliente y factura
    const [datosFactura, setDatosFactura] = useState({});
    //Productos de la factura
    const [producto, setProducto] = useState({
        articulo: "",
        cantidad: "",
        precio: "",
    });

    const handleCliente = (e) => {
        setDatosFactura({
            ...datosFactura,
            [e.target.name]: e.target.value,
        });
        console.log(e.target);
    };

    const handleDni = (e) => {
        setDatosFactura({
            ...datosFactura,
            [e.target.name]: e.target.value,
        });
        console.log(e.target);
    };

    const handleProducto = (e) => {
        var dato = e.target.value.trim();
        console.log(producto);
        setProducto({
            ...producto,
            [e.target.name]: dato,
        });
    };

    //Listado de productos
    const [listaProductos, setListaProductos] = useState([]);
    const altaProductos = (e) => {
        e.preventDefault();
        setListaProductos([...listaProductos, producto]);
        console.log("productos agregados");
        console.log(listaProductos);
        limpiar();
    };

    //Total de la factura
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let sumaTotal = 0;
        listaProductos.forEach((value) => {
            sumaTotal =
                sumaTotal + parseInt(value.cantidad) * parseInt(value.precio);
        });
        setTotal(sumaTotal);
    }, [listaProductos]);

    return (
        <div className='contenedorPrincipal'>
            <h1>Factura tipo:</h1>
            <select name='typo-factura' id=''>
                <option value='type'></option>
            </select>
            <hr />

            <h5>Datos del cliente</h5>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Nombre'
                        onChange={handleCliente}
                        value={cliente}
                    ></input>
                </div>
                <div className='form-group col-md-6'>
                    <input
                        name='dni'
                        className='form-control'
                        type='number'
                        placeholder='DNI'
                        onChange={handleDni}
                        value={dni}
                    ></input>
                    <small id='small dni' className='text-muted'>
                        Solo si el monto total supera $10.000
                    </small>
                </div>
            </div>

            <hr />

            <form onSubmit={altaProductos}>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Articulo</label>
                        <input
                            name='articulo'
                            className='form-control'
                            type='text'
                            onChange={handleProducto}
                            value={producto.articulo}
                            required='required'
                        ></input>
                    </div>

                    <div className='form-group col-md-3'>
                        <label>Cantidad</label>
                        <input
                            name='cantidad'
                            className='form-control'
                            type='number'
                            onChange={handleProducto}
                            value={producto.cantidad}
                            required='required'
                        ></input>
                    </div>

                    <div className='form-group col-md-3'>
                        <label>Precio</label>
                        <input
                            name='precio'
                            className='form-control'
                            type='number'
                            onChange={handleProducto}
                            value={producto.precio}
                            required='required'
                        ></input>
                    </div>
                </div>

                <input
                    type='submit'
                    className='btn btn-success btn-block'
                    value='Agregar Producto'
                />
            </form>
            <br />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Cod</th>
                        <th scope='col'>Producto</th>
                        <th scope='col'>Cantidad</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map((value, pos) => (
                        <tr>
                            <td>{pos}</td>
                            <td>{value.articulo}</td>
                            <td>{value.cantidad}</td>
                            <td>{value.precio}</td>
                            <td>
                                {parseInt(value.cantidad) *
                                    parseInt(value.precio)}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className='table-info'>
                        <th colSpan='4'>Total</th>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>

            <br />
            <br />

            <PDFViewer width='100%' height='600px'>
                <Boleta cliente={cliente} dni={dni}></Boleta>
            </PDFViewer>
        </div>
    );
}

export default App;
