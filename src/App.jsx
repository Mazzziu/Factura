import React, {useState, useEffect} from 'react';
import './App.css';
import Boleta from "./boleta";
//import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

function App() {

  //Nombre cliente
  const [cliente, setCliente] = useState("Matias");
  const handleCliente = (e)=>{
    setCliente(e.target.value);
    console.log(e.target.value);
  }

  //DNI o CUIT cliente
  const [dni, setDni]  = useState("");
  const handleDni = (e)=>{
    setDni(e.target.value);
    console.log(e.target.value);
  }

  //Producto
  const [producto, setProducto] = useState({
    articulo:"",
    cantidad:"",
    precio:""
  })
  const handleProducto = (e)=>{
    var dato = e.target.value.trim();
    console.log(producto)
    setProducto({
      ...producto,
      [e.target.name] : dato
    });
    
  }

  const limpiar = ()=>{
    setProducto({
      articulo:"",
      cantidad:"",
      precio:""
    })
  }

  //Listado de productos
  const [listaProductos, setListaProductos]= useState([])
  const altaProductos = (e)=>{
    e.preventDefault();
    setListaProductos([...listaProductos, producto]);
    console.log("productos agregados");
    console.log(listaProductos);
    limpiar()
  }

  

  //Total de la factura
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    let sumaTotal = 0
    listaProductos.forEach((value)=>{
      sumaTotal = sumaTotal + (parseInt(value.cantidad) * parseInt(value.precio))
    })
    setTotal(sumaTotal);
  },[listaProductos])
  

return (
<div className="contenedorPrincipal">
  <h1>Factura C</h1><hr/>

  <h5>Datos del cliente</h5>
    <div className="form-row">
      <div className="form-group col-md-6">
        <input name="nombre" className="form-control" type="text" placeholder="Nombre" onChange = {handleCliente} value={cliente}></input>
      </div>
      <div className="form-group col-md-6">
        <input name="dni" className="form-control" type="number" placeholder="DNI" onChange = {handleDni} value={dni}></input>
        <small id="small dni" className="text-muted">
          Solo si el monto total supera $10.000
        </small>
      </div>
    </div>

  <hr/> 

  <form onSubmit={altaProductos}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label>Articulo</label>
        <input name="articulo" className="form-control" type="text" onChange={handleProducto} value={producto.articulo} required></input>
      </div>

      <div className="form-group col-md-3">
        <label>Cantidad</label>
        <input name="cantidad" className="form-control" type="number" onChange={handleProducto} value={producto.cantidad} required></input>
      </div>

      <div className="form-group col-md-3">
        <label>Precio</label>
        <input name="precio" className="form-control" type="number" onChange={handleProducto} value={producto.precio} required></input>
      </div>

    </div>

    <input type="submit" className="btn btn-success btn-block" value="Agregar Producto"/>
  </form>
<br/>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Cod</th>
      <th scope="col">Articulo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    {listaProductos.map((value, pos)=>(
      <tr>
        <td scope="col">{pos}</td>
        <td scope="col">{value.articulo}</td>
        <td scope="col">{value.cantidad}</td>
        <td scope="col">{value.precio}</td>
        <td scope="col">{parseInt(value.cantidad) * parseInt(value.precio)}</td>
    </tr>
    ))}

  </tbody>
  <tfoot>
      <tr className="table-info">
        <th colSpan="4">Total</th>
        <td>${total}</td>
      </tr>
  </tfoot>
</table>

<br/><br/>

<Boleta cliente={cliente}></Boleta>

</div>
);
}

export default App;