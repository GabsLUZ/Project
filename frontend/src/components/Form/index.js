import './index.css';
import { useState } from 'react';
import InputText from '../InputText';
import Button from '../button';
import Dropdown from '../DropDown';


const Form = (props) => {

    const [descricao, setTitulo] = useState('')
    const [valor, setValor] = useState('')
    const [contaPaga, setContapaga] = useState('')
    const [banco, setBanco] = useState('')

    const Salvar = (evento) => {
        evento.preventDefault()
        props.DespesaCadastrada({
            descricao,
            valor,
            contaPaga,
            banco
        })
        console.log("ENTROU SALVAR")
        limparCampos()
    }
    const limparCampos = () => {
        console.log("ENTROU LIMPAR CAMPOS")
        setTitulo("")
        setValor("")
        setContapaga("")
        setBanco("")
        
    }
    return (
        <section className='NovaDespesa'>
            <form onSubmit={Salvar}>
                <h2>Preencha os campos para cadastrar uma nova despesa</h2>
                <InputText
                    label="Descrição"
                    placeholder="Digite a descrição da despesa"
                    valor={descricao}
                    Alterado={value => setTitulo(value)}
                />
                <InputText
                    label="Valor"
                    placeholder="Digite o valor"
                    valor={valor}
                    Alterado={value => setValor(value)}
                />
                <InputText
                    label="Conta"
                    placeholder="Digite a conta que pagou"
                    valor={contaPaga}
                    Alterado={value => setContapaga(value)}
                />
                <Dropdown
                    label="Banco"
                    itens={props.bancos}
                    valor={banco}
                    Alterado={value => setBanco(value)}
                />
                <Button>
                    Adicionar Despesa
                </Button>

            </form>
        </section>
    );
};

export default Form;