import React, { useState, useEffect } from "react";
import api from "../service/api";

const Home = () => {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {

    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString)

    api
      .get(`/api/usuarios/${usuarioLogado.id}/saldo`)
      .then((response) => {
        setSaldo(response.data);
      })
      .catch((erro) => {
        console.error(erro.response.data);
      });
  });

  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">Esse é seu sistema de finanças.</p>
      <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
      <hr className="my-4" />
      <p>
        E essa é sua área administrativa, utilize um dos menus ou botões abaixo
        para navegar pelo sistema.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/users" role="button">
          <i className="fa fa-users"></i> Cadastrar Usuário
        </a>
        <a className="btn btn-danger btn-lg" href="/posting" role="button">
          <i className="fa fa-users"></i> Cadastrar Lançamento
        </a>
      </p>
    </div>
  );
};

export default Home;
