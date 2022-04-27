import React, { useState } from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import { useNavigate } from "react-router-dom";
import UserService from "../service/resources/userService";
import { errorMessage, successMessage } from "../components/toastrMessages";
import LocalStorageService from "../service/resources/localStorageService";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const userService = new UserService();
  const navigate = useNavigate();

  const signInData = () => {
    userService
      .authUser({
        email: email,
        senha: senha,
      })
      .then((response) => {
        LocalStorageService.addItem('_logged_user', response.data)
        successMessage('Usuário logado com sucesso!')
        navigate("/home");
      })
      .catch((error) => {
        errorMessage(error.response.data);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="bs-docs-section">
            <Card title="Acessar Conta">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="E-mail: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite seu e-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup
                        label="Senha: *"
                        htmlFor="exampleInputPassword1"
                      >
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Informe sua senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </FormGroup>
                      <button className="btn btn-success" onClick={signInData}>
                        Entrar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => navigate("/users")}
                      >
                        Cadastrar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
