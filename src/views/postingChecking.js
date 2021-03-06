import React, { useState } from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";
import SelectMenu from "../components/selectMenu";
import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../components/toastrMessages";
import PostingService from "../service/resources/postingService";
import LocalStorageService from "../service/resources/localStorageService";
import PostingTable from "../components/postingTable";
import { useNavigate } from "react-router-dom";

export const PostingChecking = () => {
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [lancamentos, setLancamentos] = useState([]);

  const postingService = new PostingService();
  const navigate = useNavigate();

  const searcher = async () => {
    if (!ano) {
      errorMessage("O campo Ano é obrigatório.");
      return;
    }

    const loggedUser = LocalStorageService.getLocalLoggedUser("_logged_user");

    const filterPostingBy = {
      ano: ano,
      mes: mes,
      tipo: tipo,
      descricao: descricao,
      usuario: loggedUser.id,
    };

    await postingService
      .checkPosting(filterPostingBy)
      .then((response) => {
        if (response.data.length < 1) {
          alertMessage("Não há lançamentos para este ano.");
        }
        setLancamentos(response.data);
      })
      .catch((error) => {
        errorMessage(error.response.data);
      });
  };

  const meses = postingService.getMonthsList();
  const tipos = postingService.getTypeList();

  const editPosting = (id) => {
    navigate(`/posting-setup/${id}`)
  };

  const deletePosting = (lancamento) => {
    postingService
      .deletePosting(lancamento.id)
      .then((response) => {
        const index = lancamentos.indexOf(lancamento);
        lancamentos.splice(index);
        setLancamentos(lancamentos);
        searcher();
        successMessage("Lançamento deletado com sucesso.");
      })
      .catch((error) => {
        errorMessage(error.response.data);
      });
  };

  return (
    <Card title="Consulta de Lançamentos">
      <div className="row">
        <div className="col-md-6">
          <div className="bs-component">
            <FormGroup htmlFor="inputAno" label="Ano: *">
              <input
                type="text"
                className="form-control"
                id="inputAno"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                placeholder="Digite o Ano"
              />
            </FormGroup>
            <FormGroup htmlFor="inputMes" label="Mês:">
              <SelectMenu
                className="form-control"
                lista={meses}
                value={mes}
                onChange={(e) => setMes(e.target.value)}
              />
            </FormGroup>

            <FormGroup htmlFor="inputTipo" label="Tipo de Lançamento: ">
              <SelectMenu
                className="form-control"
                lista={tipos}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </FormGroup>

            <FormGroup htmlFor="inputDescricao" label="Descrição: ">
              <input
                type="text"
                className="form-control"
                id="inputDescricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a descrição breve do lançamento"
              />
            </FormGroup>

            <button
              type="button"
              className="btn btn-success"
              onClick={searcher}
            >
              Buscar
            </button>
            <a className="btn btn-danger" href="/posting-setup/">
              Cadastrar Novo
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <PostingTable
              lancamentos={lancamentos}
              deleteAction={deletePosting}
              editAction={editPosting}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
