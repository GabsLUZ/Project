import './index.css'

const InputText = (props) => {

    const Digitando = (evento) => {
        props.Alterado(evento.target.value)
    }

    return (
        <div className="campo_texto">
            <label>{props.label}</label>
            <input
            value={props.valor}
            onChange={Digitando}
            required={props.obritario}
            placeholder={props.placeholder}
            />
        </div>
    )

}

export default InputText