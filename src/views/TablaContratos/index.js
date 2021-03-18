import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

export default function TablaContrato() {
  return(
    <div>TablaContrato</div>
  );
}
/*
export default function TablaContrato() {
    const URL = "http://localhost:53000/api/contratos";
    const[data, setData] = useState([]);
    const urlGet =async()=>{
    await axios.get(URL)
    .then(response =>{
      setData(response.data);
    }).catch(err =>{
      console.warn(err);
    })
  }
  useEffect(()=>{
    urlGet();
  },[])
    return (
    <div className="container-fluid">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Numero de contrato</th>
            <th>Evento</th>
            <th>Motivo</th>
            <th>Submotivo</th>
            <th>Ciclo</th>
            <th>TMS</th>
            <th>Codigo Cliente 1</th>
            <th>Codigo Cliente 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map(contratos =>(
            <tr key={contratos.id}>
              <td>{contratos.cliente}</td>
              <td>{contratos.numeroInterno}</td>
              <td>{contratos.evento}</td>
              <td>{contratos.descripcionMotivoTraza}*</td>
              <td>{contratos.descripcionSubMotivoTraza}*</td>
              <td>{contratos.ciclo}</td>
              <td>{contratos.tms}</td>
              <td>{contratos.codigoCliente1}</td>
              <td>{contratos.codigoCliente2}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}*/
