import { json } from "react-router-dom";

    const API_URL = "http://localhost:8080/proveedor";

export async function listaProveedores(token){
    const response = await fetch(`${API_URL}/lista`,{
        headers: {"Authorization" : token}
    });
    const data = await response.json()
    return data;
}

export async function saveProveedor(formData){
    const response = await fetch(`${API_URL}/crear`,{
        method : "POST",
        body: formData

    })

    const data = await response.json();
    return data;
}

export async function deleteProveedor(id){
const response = await fetch(`${API_URL}/eliminar/${id}`,
{
    method : "DELETE"
})
}

export async function detalleProveedor(id,token){
    const response = await fetch(`${API_URL}/detalle/${id}`,{
        headers: {"Authorization" : token}
    });
    const data = await response.json()
    return data;
}

export async function updateProveedor(id,proveedor){
    const response = await fetch(`${API_URL}/modificar/${id}`,{
        method : "PUT",
        headers: {
             "Content-type" : "application/json" },
        body : JSON.stringify(proveedor)

    })
}


export async function listaProveedoresPorServicio(servicio){
    const response = await fetch(`${API_URL}/lista/${servicio}`);
    const data = await response.json()
    return data;
}
