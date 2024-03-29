const API_URL="http://localhost:8080/trabajo";

 export async function saveTrabajo(trabajoDatos){
    const response = await fetch( `${API_URL}/crear`,
    {
        method: "POST",
        headers : {"Content-type" : "application/json"},
        body : JSON.stringify(trabajoDatos)


    })

}



export async function listaTrabajo(id){
 const response = await fetch(`${API_URL}/listaPorProveedor/${id}`)
 const data = response.json();       
return data;
}


export async function deleteTrabajo(num_trabajo){
    const response = await fetch( `${API_URL}/eliminar/${num_trabajo}`,
    {
        method: "DELETE"
    })

}

export async function updateTrabajo(num_trabajo,trabajo){
const response = await fetch(`${API_URL}/modificar/${num_trabajo}`,{
method : "PUT",
headers : {"Content-type" : "application/json"},
body : JSON.stringify(trabajo)
}
)
}

export async function verTrabajo(num_trabajo){
const response = await fetch(`${API_URL}/detalle/${num_trabajo}`)
const data = await response.json()
return data;

}




