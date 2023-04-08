import './index.css'

const Despesa = (props) => {
    return(
        <div className='conta'>
            <div className='numero'>
                <h1>{props.contaPaga}</h1>
            </div>
            <div className='rodape'>
                <h2>{props.descricao}</h2>
                <h4>{props.valor}</h4>
            </div>
        </div>
    )
}

export default Despesa