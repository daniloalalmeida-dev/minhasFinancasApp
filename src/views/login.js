import React from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";

class Login extends React.Component {
  state = {
    email: "",
    senha: "",
  };

  entrar = () => {
    console.log("Entrar: ", this.state.email,
      this.state.senha
      );
  };

  cadastrar = () => {
    console.log("Cadastrei: ", this.state.email,
    this.state.senha
    );
  };

  render() {
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
                      <fieldset>
                        <FormGroup
                          label="E-mail: *"
                          htmlFor="exampleInputEmail1"
                        >
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Digite seu e-mail"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
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
                            value={this.state.senha}
                            onChange={e => this.setState({senha: e.target.value})}
                          />
                        </FormGroup>
                        <button
                          className="btn btn-success"
                          onClick={this.entrar}
                        >
                          Entrar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={this.cadastrar}
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
  }
}

export default Login;