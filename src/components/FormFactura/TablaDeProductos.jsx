import React from "react";
import { v4 as uuidv4 } from "uuid";

const TablaDeProductos = ({ productos, deleteProducts }) => {
    return (
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Id</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Cant.</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'>base imponible</th>
                    <th scope='col'>iva</th>
                    <th scope='col'>subtotal</th>
                </tr>
            </thead>
            <tbody>
                {productos.length > 0 || productos != undefined ? (
                    productos.map((prod, pos) => (
                        <tr key={uuidv4()}>
                            <th scope='row'>{pos + 1}</th>
                            <td>{prod.id}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.cantidad}</td>
                            <td>
                                <div className='d-flex justify-content-between pe-4'>
                                    <div>$</div>
                                    <div>
                                        {new Intl.NumberFormat("es-AR").format(
                                            prod.precio
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex justify-content-between pe-4'>
                                    <div>$</div>
                                    <div>
                                        {new Intl.NumberFormat("es-AR").format(
                                            prod.baseImponible
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex justify-content-between pe-4'>
                                    <div>$</div>
                                    <div>
                                        {new Intl.NumberFormat("es-AR").format(
                                            prod.ivaMonto
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex justify-content-between pe-4'>
                                    <div>$</div>
                                    <div>
                                        {new Intl.NumberFormat("es-AR").format(
                                            prod.subtotal
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={() => {
                                        deleteProducts(prod, pos);
                                    }}
                                >
                                    Borrar
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-outline-warning btn-sm'>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <th>Sin productos</th>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TablaDeProductos;
