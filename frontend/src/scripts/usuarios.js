import axios from "axios";

const localhost = "http://localhost:";
const porta = "7070";
const urlApi = localhost + porta

export function cadastrarUsuario(data) {
    axios.post(`${urlApi}/api/usuarios`, data)
        .then(response => {
            console.log("Envio API", response, response.data);
        })
        .catch(err => {
            console.error(err);
            console.error(err.data);
        });
}

export async function buscarUsuarios() {
    try {
        const response = await axios.get(`${urlApi}/api/usuarios`);
        console.log("Retorno usuarios", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}