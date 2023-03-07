import {useStates} from 'react';
import Form from './components/Form';

function App() {

  const ContasBancarias = [
    {
      nome_banco: 'Brasil',
      corPrincipal: '#FFFF00',
      corSegundaria: '#FFD700'
    }
  ]

  const [contas, setContas] = useStates[];

  const NovaConta = (conta) => {
    console.log(conta)
    setContas([...contas, conta])
  }

    return (
    <div className="App">
    <Form

      contas = {ContasBancarias.map((conta) => conta.nome)}
      DespesaCadastrada = {(despesa) => NovaDespesa(despesa)}
    />
    </div>
  );
}

export default App;
