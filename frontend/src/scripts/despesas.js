import axios from "axios";

const localhost = "http://localhost:";
const porta = "7070";
const urlApi = localhost + porta

export function inserirDespesa(data) {
    axios.post(`${urlApi}/api/despesas`, data)
        .then(response => {
            console.log("Envio API", response, response.data);
            return response.data.data;
        })
        .catch(err => {
            console.error(err);
            console.error(err.data);
        });
}

export async function buscarDespesas() {
    try {
        const response = await axios.get(`${urlApi}/api/despesas`);
        //console.log("All despesas", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function deleteDespesa(id) {
    axios.delete(`${urlApi}/api/despesas/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}