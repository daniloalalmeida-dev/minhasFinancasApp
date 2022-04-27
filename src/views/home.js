import React, { useState, useEffect } from "react";
import UserService from "../service/resources/userService";
import { errorMessage } from "../components/toastrMessages";
import LocalStorageService from "../service/resources/localStorageService";

const Home = () => {
  const [saldo, setSaldo] = useState(0);
  const userService = new UserService();

  useEffect(() => {
    const loggedUser = LocalStorageService.getLocalLoggedUser('_logged_user');

    userService
      .getAmountByUser(loggedUser.id)
      .then((response) => {
        setSaldo(response.data);
      })
      .catch((error) => {
        errorMessage(error.response.data);
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
