import './index.css';
import { useState} from 'react';
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
    }

    return (
        <section className='NovaDespesa'>
            <form onSubmit={Salvar}>
                <h2>Preencha os campos para cadastrar uma nova despesa</h2>
                <InputText
                obrigatorio={true}
                label="Descrição"
                placeholder="Digite a descrição da despesa"
                valores={descricao}
                Alterado={valores => setTitulo(valores)}
                />
                <InputText
                obrigatorio={true}
                label="Valor"
                placeholder="Digite o valor"
                valores={valor}
                Alterado={valores => setValor(valores)}
                />
                <InputText
                obrigatorio={true}
                label="Conta"
                placeholder="Digite a conta que pagou"
                valores={contaPaga}
                Alterado={valores => setContapaga(valores)}
                />
                <Dropdown
                obrigatorio={true}
                label="Banco"
                itens={props.bancos}
                valores={banco}
                Alterado={valores => setBanco(valores)}
                />
                <Button>
                Adicionar Despesa    
                </Button>                
                
            </form>
        </section>
    );
};

export default Form;