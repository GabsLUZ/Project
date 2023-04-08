import Despesa from '../despesa';
import './index.css'

const Category = (props) => {
    return (
        <section className='agencias' 
        style={{backgroundColor:props.corSegundaria}}
        >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome_agencia}</h3>
            <div className="contas">
                {props.despesas.map((despesa) => 
                (
                 <Despesa 
                 descricao={despesa.descricao} 
                 valor={despesa.valor} 
                 contaPaga={despesa.contaPaga} />
             ))}
            </div>
        </section>
    );
};

export default Category