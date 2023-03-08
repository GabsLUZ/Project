import './index.css'

const Dropdown = (props) => {
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.Alterado(evento.target.value)} 
                    required={props.obrigatorio}
                    value={props.value}>
                    {props.itens.map(item => {
                        return  <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}
export default Dropdown