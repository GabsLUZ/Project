import { useState, useEffect } from 'react';
import Category from '../components/Category';
import InputText from '../components/InputText';
import Dropdown from '../components/DropDown';
import Form from '../components/Form';
import Nav from '../components/image';
import bancos from '../banco';
import "./pagesCss/login.css";
import { Link, useNavigate } from "react-router-dom";
import { buscarUsuarios } from '../scripts/usuarios';

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, newValueSenha] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [findUsuario, setFindUsuario] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        buscarUsuarios().then(data => {
            setFindUsuario(data)
            //console.warn("FIND USUARIOS >>> ", data)
        });
    }, []);

    const viewPassword = () => {
        setShowPass(!showPass);
    }

    const loginData = {
        user: usuario,
        pass: senha
    }

    const validateLogin = (e) => {

        e.preventDefault();
        let validacoes = "";

        const filtroUsuario = findUsuario.filter(user => user.nome_usuario == usuario);

        if(filtroUsuario.length == 0  || (senha != filtroUsuario[0].senha)){
            validacoes += "Usuário ou senha incorreta. \n"
        }
        
        if(!validacoes){
            sessionStorage.setItem("usuario", JSON.stringify(loginData));
            navigate("/Home");
        }else{
            alert(validacoes);
            validacoes = "";
        }
    }

    return (
        <div className="App">
            <Nav />
            <section className='NovaDespesa'>
                <form noValidate>
                    <h2>Realize o login para gerenciar as suas despesas!</h2>
                    <div className="campo_texto">
                        <label>Usuário</label>
                        <input
                            placeholder="Usuario"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                        <label>Senha</label>
                        <input
                            placeholder="Senha"
                            valor={senha}
                            type={showPass ? "text" : "password"}
                            onChange={e => newValueSenha(e.target.value)}
                        />
                    </div>
                    <label className='labelCampoCliente'>
                        <input
                            type='checkbox'
                            onClick={viewPassword}
                        />
                        {showPass ? "Esconder senha" : "Mostrar senha"}
                    </label>
                    <div className='infoCadastro'>
                        <Link to={"/Cadastro"}>
                            <a>Não possui um cadastro? Clique Aqui!</a>
                        </Link>
                    </div>
                    <div className='confirm'>
                        <Link>
                            <button className='botaoLogin' type="submit" onClick={validateLogin}>
                                Login
                            </button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
}