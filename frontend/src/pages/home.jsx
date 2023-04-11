import { useState, useEffect } from 'react';
import Category from '../components/Category';
import Form from '../components/Form';
import Nav from '../components/image';
import bancos from '../banco';
import { buscarDespesas } from '../scripts/despesas';

export default function Home() {
    let agenciasBanco = [];
    const [allDespesas, setAllDespesas] = useState([]);
    const [sessionUser, setSessionUser] = useState("");
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        buscarDespesas().then(data => {
            setAllDespesas(data);
        });

        const findUser = sessionStorage.getItem("usuario");

        if (findUser) {
            setSessionUser(JSON.parse(findUser));
        }

    }, [allDespesas]);

    useEffect(() => {
        if(sessionUser){
            setDespesas(allDespesas.filter(element => element.usuario == sessionUser["user"]));
        }
    }, [allDespesas, sessionUser]);

    let bancosFilter = bancos.filter(banco => banco.nome_banco != "Selecione um banco");

    for (let i = 0; i < bancosFilter.length; i++) {
        if (despesas.filter(despesa => despesa.nome_banco === bancosFilter[i].nome_banco).length > 0) {
            agenciasBanco.push(bancosFilter[i]);
        } else {
            continue;
        }
    }

    const NovaDespesa = (despesa) => {
        setDespesas([...despesas, despesa])
    };

    return (
        <div className="App">
            <Nav />
            <Form
                bancos={bancos.map((banco) => banco.nome_banco)}
                DespesaCadastrada={(despesa) => NovaDespesa(despesa)}
            />

            {agenciasBanco.map((banco) => (
                <Category
                    key={banco.nome_banco}
                    nome_agencia={banco.nome_banco}
                    corPrimaria={banco.corPrimaria}
                    corSegundaria={banco.corSegundaria}
                    despesas={despesas.filter((despesa) => despesa.nome_banco === banco.nome_banco)}
                />

            ))}

        </div>

    );
}
