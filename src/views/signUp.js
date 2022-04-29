import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import "./../custom.css";
import UserService from "../service/resources/userService";
import { successMessage, errorMessage } from "../components/toastrMessages";

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");

  const userService = new UserService();

  const navigate = useNavigate();

  const validateForm = () => {
    const messages = [];

    if (!nome) {
      messages.push("O campo Nome é obrigatório.");
    }

    if (!email) {
      messages.push("O campo E-mail é obrigatório");
    } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      messages.push("Informe um e-mail válido.");
    }

    if (!senha || senha !== senhaRepeticao) {
      messages.push("As senhas devem ser iguais.");
    }

    return messages;
  };

  const signUpNewUser = async () => {
    const messages = validateForm();

    if (messages && messages.length > 0) {
      messages.forEach((messages, index) => {
        errorMessage(messages);
      });
      return false;
    }

    const user = {
      nome: nome,
      email: email,
      senha: senha,
    };

    await userService
      .signUpNewUser(user)
      .then((response) => {
        successMessage("Cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        errorMessage(error.response.data);
      });
  };

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
                  onChange={(e) => setNome(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputPassword">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FormGroup>
              <FormGroup label="Repita a Senha: *" htmlFor="inputPassword">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  placeholder="Repita sua Senha"
                  value={senhaRepeticao}
                  onChange={(e) => setSenhaRepeticao(e.target.value)}
                />
              </FormGroup>
              <button
                type="button"
                className="btn btn-success"
                onClick={signUpNewUser}
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
