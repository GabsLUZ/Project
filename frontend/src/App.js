import {useState} from 'react';
import Category from './components/Category';
import Form from './components/Form';
import Nav from './components/image';
import bancos from './banco';

function App() {
  
  let agenciasBanco = [];

  const [despesas, setDespesas] = useState([]); 

  const NovaDespesa = (despesa) => {
    console.log(despesa)
    setDespesas([...despesas, despesa])
  };

  for (let i=0; i < bancos.length; i++) {
    if(despesas.filter(despesa => despesa.banco === bancos[i].nome_banco).length > 0){
      agenciasBanco.push(despesas[i]);
    }
    else {continue;
    }
  }

  return (
    <div className="App">
    <Nav/>
    <Form
      bancos = {bancos.map((banco) => banco.nome_banco)}
      DespesaCadastrada = {(despesa) => NovaDespesa(despesa)}
    />

    {bancos.map((banco) => (
      <Category
      key = {banco.nome_banco}
      nome_agencia={banco.nome_banco}
      corPrimaria={banco.corPrimaria}
      corSegundaria={banco.corSegundaria}
      despesas={despesas.filter((despesa) => despesa.banco === banco.nome_banco)}      
      />
      
    ))}
   
    </div>

  );
}

export default App;
