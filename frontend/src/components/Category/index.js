import Despesa from '../despesa';
import './index.css'

const Category = (props) => {
    return (
        <section className='ContasBancarias' 
        style={{backgroundColor:props.corSegundaria}}
        >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome_conta}</h3>
            <div className="despesas">
                {props.despesas.map((despesa) => (
                 <Despesa valor={despesa.valor} descricao={despesa.descricao} numero={despesa.numero} />
             ))}
            </div>
        </section>
    );
};

export default Category