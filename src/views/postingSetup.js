import React, { useState, useEffect } from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import SelectMenu from "../components/selectMenu";
import {
  successMessage,
  errorMessage,
  alertMessage,
} from "../components/toastrMessages";
import PostingService from "../service/resources/postingService";
import LocalStorageService from "../service/resources/localStorageService";
import { useParams } from "react-router-dom";

const PostingSetup = () => {
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState();
  const [status, setStatus] = useState();

  const postingService = new PostingService();
  const meses = postingService.getMonthsList();
  const tipos = postingService.getTypeList();
  const loggedUser = LocalStorageService.getLocalLoggedUser("_logged_user");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      postingService
        .getPostingById(params.id)
        .then((response) => {
          setAno(response.data.ano);
          setMes(response.data.mes);
          setTipo(response.data.tipo);
          setDescricao(response.data.descricao);
          setValor(response.data.valor);
          setStatus(response.data.status);
        })
        .catch((error) => {
          errorMessage(error.response.data);
        });
    }
  }, []);

  const handleSubmitToUpdateOne = async () => {
    const lancamento = {
      descricao: descricao,
      ano: ano,
      mes: mes,
      valor: valor,
      tipo: tipo,
      usuario: loggedUser.id,
      id: params.id,
      status: status,
    };

    if (!descricao || !ano || !mes || !valor || !tipo) {
      return alertMessage("Informe todos os dados");
    } else {
      await postingService
        .handleSubmitUpdate(lancamento)
        .then((response) => {
          successMessage("Lançamento atualizado com sucesso!");
        })
        .catch((error) => {
          errorMessage(error.response.data);
        });
    }
  };

  const clearAll = () => {
    console.log("aplicar useReducer");
  };

  const handleSubmitToSaveANewOne = async () => {
    const lancamento = {
      descricao: descricao,
      ano: ano,
      mes: mes,
      valor: valor,
      tipo: tipo,
      usuario: loggedUser.id,
    };

    if (!descricao || !ano || !mes || !valor || !tipo) {
      return alertMessage("Informe todos os dados");
    } else {
      await postingService
        .handleSubmit(lancamento)
        .then((response) => {
          successMessage("Lançamento cadastrado com sucesso!");
        })
        .catch((error) => {
          errorMessage(error.response.data);
        });
    }
  };

  return (
    <Card title={!params.id ? "Cadastrar Lançamento" : "Atualizar Lançamento"}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup id="inputDescription" label="Descrição: *">
            <input
              type="text"
              className="form-control"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite a descrição do lançamento."
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FormGroup id="inputAno" label="Ano: *">
            <input
              type="text"
              className="form-control"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="Informe o ano do lançamento."
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputMes" label="Mês: *">
            <SelectMenu
              className="form-control"
              lista={meses}
              value={mes}
              onChange={(e) => setMes(e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputValue" label="Valor: *">
            <input
              type="number"
              className="form-control"
              value={valor ?? ""}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Digite o valor a ser lançado."
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputTipo" label="Tipo: *">
            <SelectMenu
              className="form-control"
              lista={tipos}
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </FormGroup>
        </div>

        <div className="col-md-4">
          <FormGroup id="inputStatus" label="Status: ">
            <input
              className="form-control"
              type="text"
              disabled
              value={status ?? "PENDENTE"}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-success"
            onClick={
              params.id ? handleSubmitToUpdateOne : handleSubmitToSaveANewOne
            }
          >
            Salvar
          </button>
          <button type="button" className="btn btn-danger" onClick={clearAll}>
            Limpar
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostingSetup;
