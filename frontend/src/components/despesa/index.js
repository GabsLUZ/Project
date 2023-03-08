import './index.css'

const Despesa = (props) => {
    return(
        <div className='conta'>
            <div className='numero'>
                <h2>{props.numero}</h2>
            </div>
            <div className='rodape'>
                <h4>{props.valor}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )
}

export default Despesa