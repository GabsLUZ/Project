import Despesa from '../despesa';
import './index.css';
import { deleteDespesa } from '../../scripts/despesas';

const Category = (props) => {

    const handleDelete = (id) => {
        deleteDespesa(id);
    };

    return (
        <section
            className="agencias"
            style={{ backgroundColor: props.corSegundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome_agencia}</h3>
            <div className="contas">
                {props.despesas.map((despesa) => (
                    <div key={despesa._id}>
                        <Despesa
                            descricao={despesa.tipo_despesas}
                            valor={despesa.valor}
                            contaPaga={despesa.conta_paga}
                        />
                        <button
                            className="botaoDelete"
                            onClick={() => handleDelete(despesa._id)}
                        >
                            Deletar despesa
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Category;