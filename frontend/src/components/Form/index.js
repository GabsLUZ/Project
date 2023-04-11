import './index.css';
import { useState, useEffect } from 'react';
import InputText from '../InputText';
import Button from '../button';
import Dropdown from '../DropDown';
import { inserirDespesa } from '../../scripts/despesas.js';
import { buscarDespesas } from '../../scripts/despesas.js';

const Form = (props) => {

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [contaPaga, setContaPaga] = useState('');
    const [banco, setBanco] = useState('');
    const [sessionUser, setSessionUser] = useState("");
    const [allDespesas, setAllDespesas] = useState([]);
    const [despesas, setDespesas] = useState([]);
    const [totalDespesas, setTotalDespesas] = useState(0);

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
          const total = despesas.map(desp => desp.valor).reduce((x, y) => x + y, 0);
          setTotalDespesas(total.toFixed(2));
        }
      }, [allDespesas, sessionUser]);
    //console.warn(totalDespesas)

    const jsonInsertDespesa = {
        "valor": valor,
        "tipo_despesas": descricao,
        "nome_banco": banco,
        "usuario": sessionUser["user"],
        "conta_paga": contaPaga
    }

    const salvarDespesa = (e) => {
        e.preventDefault();

        const validacaoDespesa = validateDespesa();

        if (validacaoDespesa) {
            alert(validacaoDespesa);
            return;
        }

        props.DespesaCadastrada({
            descricao,
            valor,
            contaPaga,
            banco
        });
        console.warn("ENVIO >> ", jsonInsertDespesa)
        inserirDespesa(jsonInsertDespesa);
        limparCampos();
    }

    const limparCampos = () => {
        setDescricao("");
        setValor("");
        setContaPaga("");
        setBanco("");
    }

    const validateDespesa = () => {
        let validacoes = "";

        if (banco === "Selecione um banco" || !banco) {
            validacoes += "O campo 'Banco' é obrigatório \n";
        }

        if (!descricao) {
            validacoes += "O campo 'Descrição' é obrigatório \n";
        }

        if (!contaPaga) {
            validacoes += "O campo 'Conta' é obrigatório \n";
        }

        if (!valor) {
            validacoes += "O campo 'Valor' é obrigatório \n";
        } else if (valor <= 0) {
            validacoes += "Valor de despesa está menor ou igual a zero \n";
        }

        return validacoes;
    }

    return (
        <section className='NovaDespesa'>
            <form onSubmit={salvarDespesa} noValidate>
                {sessionUser ? <h2>Olá {sessionUser["user"]}! Preencha os campos para cadastrar uma nova despesa</h2> : null}
                <InputText
                    label="Descrição"
                    placeholder="Digite a descrição da despesa"
                    valor={descricao}
                    Alterado={value => setDescricao(value)}
                />
                <InputText
                    label="Valor"
                    placeholder="Digite o valor"
                    valor={valor}
                    Alterado={value => setValor(value.replace(',', '.'))}
                />
                <InputText
                    label="Conta"
                    placeholder="Digite a conta que pagou"
                    valor={contaPaga}
                    Alterado={value => setContaPaga(value)}
                />
                <Dropdown
                    label="Banco"
                    itens={props.bancos}
                    valor={banco}
                    Alterado={value => setBanco(value)}
                />
                <div className='botoes'>
                    <button className='botao' type="submit">
                        Adicionar Despesa
                    </button>
                    {totalDespesas ?
                        <a className='totalDespesa'>
                            Total de despesas: R$ {totalDespesas}
                        </a> :
                        null
                    }
                </div>

            </form>
        </section>
    );
};

export default Form;