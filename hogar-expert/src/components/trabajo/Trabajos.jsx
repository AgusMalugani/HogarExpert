import React, { useEffect, useState } from 'react'
import { deleteTrabajo, listaTrabajo } from '../../servicios/TrabajoServicio'
import Trabajo from './Trabajo'
import { useUser } from '../sesion/UserContext'

export default function Trabajos() {
  const{user} = useUser();
  
    const[trabajos,setTrabajos]=useState([])
    useEffect( ()=>{
        listaTrabajo(user.id).then( data => {setTrabajos(data)} )
    },[] )
  
    async function eliminarTrabajo(trabajo){
      await deleteTrabajo(trabajo.num_trabajo)
      const newTrabajos = trabajos.filter( tr => tr.num_trabajo !== trabajo.num_trabajo)
      setTrabajos(newTrabajos);
    }



  function goBack(){
    window.history.back();
  }
  
    return (
      <div>
    <table>
      <thead>
        <tr>
        <th>NUM TRABAJO</th>
        <th>HORAS TRABAJO</th>
        <th>TOTAL</th>
        <th>ID USUARIO</th>
        <th>ID PROVEEDOR</th>
        <th>ESTADO</th>
        <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {trabajos.length > 0 && trabajos.map(elemento => <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} /> ) }
      </tbody>
      
    </table>
    <button onClick={goBack}>Volver</button>
    </div>
  )
}
