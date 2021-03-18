import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
/*import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'*/

export default function TablaNovedades() {
    return(
      <h2>TablaNovedades</h2>
    );
  }
/*
export default function TablaNovedades() {
    const [data, setData] = useState([]);
    const URL = "http://localhost:63747/api/novedades";

    const urlGet = async () => {
        const response = await axios.get(URL);
        setData(response.data);    
    }

    useEffect(()=>{
        urlGet().catch(err => console.warn(err));
    },[])

    return (    
        <div className="container-fluid align-content-center text-capitalize">
            <table className="table table-striped center-flex">
                <thead>
                <tr align="center">
                    <th>Id</th>
                    <th>Numero envio</th>
                    <th>Evento</th>
                    <th>Cliente</th>
                    <th>Codigo cliente</th>
                    <th>Traduccion</th>
                    <th>Fecha incidencia</th>
                    <th>Mensaje enviado</th>
                </tr>
                </thead>
                <tbody>
                {data.map(novedades =>(
                    <tr key={novedades.id} align="center">
                    <td>{novedades.id}</td>
                    <td>{novedades.numeroDeEnvio}</td>
                    <td>{novedades.eventoEnvio}</td>
                    <td>{novedades.cliente}</td>
                    <td>{novedades.codigoCliente}</td>
                    <td>{novedades.traduccion}</td>
                    <td>{novedades.fechaIncidencia}</td>
                    <td>{novedades.mensajeEnviado}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}*/