import {useState} from 'react';
import Form from './components/Form';


function App() {

  const ContasBancarias = [
    {
      nome_banco: 'Banco do Brasil',
      corPrincipal: '#FFFF00',
      corSegundaria: '#FFD700'
    },
  ]

  const [despesas, setDespesas] = useState([]); 

  const NovaDespesa = (despesa) => {
    console.log(despesa)
    setDespesas([...despesas, despesa])
  };

  return (
    <div className="App">
    <Form
      despesas = {ContasBancarias.map((despesa) => despesa.nome_banco)}
      DespesaCadastrado = {(despesa) => NovaDespesa(despesa)}
    />
    {/* <Category
    key={despesa.nome_banco}
    nome={despesa.nome_banco}
    />
 */}
    </div>

  );
}

export default App;
