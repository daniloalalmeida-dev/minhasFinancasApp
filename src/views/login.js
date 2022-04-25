import React, { useState } from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import { useNavigate } from "react-router-dom";
import api from "./../service/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async () => {
    await api
      .post("/api/usuarios/autenticar", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((erro) => {
        setErrorMessage(erro.response.data);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <div>{errorMessage}</div>
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
                      <button className="btn btn-success" onClick={signIn}>
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

export default Login;
