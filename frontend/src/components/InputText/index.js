import './index.css'

const InputText = (props) => {
   
   const Digitado = (evento) => {
      props.Alterado(evento.target.value)
   }

   return (
     <div className="campo_texto">
        <label>{props.label}</label>
        <input
            value={props.valor}
            onChange={Digitado} 
            required={props.obrigatorio} 
            placeholder={props.placeholder}
        />
     </div>
   )
}

export default InputText