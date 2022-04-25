import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import "./../custom.css";

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaRepeticao, setSenhaRepeticao] = useState('');

  const navigate = useNavigate();

  const cadastrou = () => {
    console.log("Cadastrou: ", nome, email, senha, senhaRepeticao);
    navigate('/')
  }

  return (
    <div className="container">
      <Card title="Cadastro de Usuários">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input
                  type="text"
                  id="inputNome"
                  name="nome"
                  className="form-control"
                  placeholder="Digite o Nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </FormGroup>
              <FormGroup label="E-mail: *" htmlFor="inputEmail">
                <input
                  type="email"
                  id="inputEmail"
                  name="email"
                  className="form-control"
                  placeholder="Digite seu E-mail"
                  value={email}
                  onChange={e =>
                    setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputPassword">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </FormGroup>
              <FormGroup label="Repita a Senha: *" htmlFor="inputPassword">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  placeholder="Repita sua Senha"
                  value={senhaRepeticao}
                  onChange={e => setSenhaRepeticao(e.target.value)}
                />
              </FormGroup>
              <button
                type="button"
                className="btn btn-success"
                onClick={cadastrou}
              >
                Salvar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => navigate("/")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
