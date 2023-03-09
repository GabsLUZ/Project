import Despesa from '../despesa';
import './index.css'

const Category = (props) => {
    return (
        <section className='agencias' 
        style={{backgroundColor:props.corSegundaria}}
        >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome_agencia}</h3>
            <div className="contas">
                {props.despesas.map((despesa) => (
                 <Despesa valor={despesa.valor} descricao={despesa.descricao} numero={despesa.numero} />
             ))}
            </div>
        </section>
    );
};

export default Category