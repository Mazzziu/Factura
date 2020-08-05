import React from 'react';
import './App.css';
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

const Boleta = ({cliente}) => {

    const capturar = ()=>{
        html2canvas(document.querySelector("#capture")).then(function(canvas) {
          const imgData = canvas.toDataURL('image/png');
          document.body.appendChild(canvas);
          console.log(imgData);
          window.open(imgData);
          //const pdf = new jsPDF();
          //pdf.addImage(imgData, 'PNG', 0, 0);
          // pdf.output('dataurlnewwindow');
          //pdf.save("download.pdf");
        });}

    return(
      <div id="capture" >
        <p>pdf {cliente}</p>
<table >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        <button onClick={capturar}> capture</button> 
    </div>  
    );
};

export default Boleta;