import React, { useState } from "react";

const FormProductos = ({ IVA, addProduct }) => {
    //Productos de la factura
    const [items, setItems] = useState({
        iva: IVA[0].value, //default iva 21%
    });

    const handleItems = (e) => {
        setItems({
            ...items,
            [e.target.name]: e.target.value,
        });
    };

    const agregarProductos = (e) => {
        e.preventDefault();
        let aux = items;
        aux.subtotal = Number(items.cantidad) * Number(items.precio);
        aux.baseImponible = aux.subtotal / (1 + Number(items.iva));
        aux.ivaMonto = aux.subtotal - aux.baseImponible;
        setItems(aux);
        addProduct(items);
    };
    return (
        <form onSubmit={agregarProductos} className='col-12'>
            <div className='row'>
                <div className='col-3 col-md'>
                    <span>Id</span>
                    <input
                        type='text'
                        className='form-control'
                        name='id'
                        onChange={handleItems}
                    ></input>
                </div>
                <div className='col-9 col-md-8'>
                    <span>Descripcion</span>
                    <input
                        type='text'
                        className='form-control'
                        name='descripcion'
                        required
                        onChange={handleItems}
                    ></input>
                </div>
                <div className='col-6 col-md mt-2 mt-md-0'>
                    <span>Cantidad</span>
                    <input
                        type='number'
                        className='form-control'
                        name='cantidad'
                        required
                        onChange={handleItems}
                    ></input>
                </div>
                <div className='col-6 col-md-3 mt-2'>
                    <span>Precio</span>
                    <input
                        type='number'
                        className='form-control'
                        name='precio'
                        step='any'
                        required
                        onChange={handleItems}
                    ></input>
                </div>
                <div className='col mt-2'>
                    <span>IVA</span>
                    <select
                        className='form-select'
                        name='iva'
                        onChange={handleItems}
                    >
                        {IVA.map((type) => (
                            <option
                                key={`ivaType-${type.Id}`}
                                value={type.value}
                            >
                                {type.Desc}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col col-md-4 mt-2'>
                    <span>Subtotal</span>
                    <h3>
                        {items.hasOwnProperty("cantidad") &&
                        items.hasOwnProperty("precio")
                            ? `$${new Intl.NumberFormat("es-AR").format(
                                  Number(items.cantidad) * Number(items.precio)
                              )}`
                            : 0}
                    </h3>
                </div>

                <input
                    className='btn btn-outline-secondary col-12 col-md-3 mt-3'
                    type='submit'
                    value='Agregar'
                ></input>
            </div>
        </form>
    );
};

export default FormProductos;
