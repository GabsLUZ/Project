import { useState } from 'react';
import Category from '../components/Category';
import InputText from '../components/InputText';
import Dropdown from '../components/DropDown';
import Form from '../components/Form';
import Nav from '../components/image';
import bancos from '../banco';
import "./pagesCss/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from '../scripts/usuarios';

export default function Cadastro() {

    const [usuario, setUsuario] = useState('');
    const [senha, newValueSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const viewPassword = () => {
        setShowPass(!showPass);
    };

    const loginData = {
        "nome_usuario": usuario,
        "senha": senha
    };

    const validateCadastro = (e) => {
        e.preventDefault();

        let validacoes = "";

        if(!usuario){
            validacoes += "O campo 'Usuário' é obrigatório. \n";
        }
        if(!senha){
            validacoes += "O campo 'Senha' é obrigatório. \n";
            
        }else if(!confirmSenha){
            validacoes += "É necessário confirmar a sua senha. \n";

        }else if(senha !== confirmSenha){
            validacoes += "Senha de confirmação inválida. \n"
        }

        if(!validacoes){
            cadastrarUsuario(loginData);
            navigate("/");
        }else{
            alert(validacoes)
            validacoes = "";
        }
    }

    return (
        <div className="App">
            <Nav />
            <section className='NovaDespesa'>
                <form onSubmit={validateCadastro}>
                    <h2>Preencha os campos abaixo para realizar o cadastro</h2>
                    <div className="campo_texto">
                        <label>Usuário</label>
                        <input
                            placeholder="Usuario"
                            type='text'
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                        <label>Senha</label>
                        <input
                            placeholder="Senha"
                            value={senha}
                            type={showPass ? "text" : "password"}
                            onChange={e => newValueSenha(e.target.value)}
                        />
                        <label>Confirme a senha</label>
                        <input
                            placeholder="Confirme a senha"
                            value={confirmSenha}
                            type={showPass ? "text" : "password"}
                            onChange={e => setConfirmSenha(e.target.value)}
                        />
                    </div>
                    <label className='labelCampoCliente'>
                        <input
                            type='checkbox'
                            onClick={viewPassword}
                        />
                        {showPass ? "Esconder senha" : "Mostrar senha"}
                    </label>
                    <div className='confirm'>
                        <button className='botaoLogin' type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}