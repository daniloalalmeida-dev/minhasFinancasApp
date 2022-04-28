import ApiService from "../api";

export default class PostingService extends ApiService {
  constructor() {
    super("/api/lancamentos");
  }

  getMonthsList() {
    return [
      { label: "Selecione...", value: "" },
      { label: "Janeiro", value: 1 },
      { label: "Fevereiro", value: 2 },
      { label: "Março", value: 3 },
      { label: "Abril", value: 4 },
      { label: "Maio", value: 5 },
      { label: "Junho", value: 6 },
      { label: "Julho", value: 7 },
      { label: "Agosto", value: 8 },
      { label: "Setembro", value: 9 },
      { label: "Outubro", value: 10 },
      { label: "Novembro", value: 11 },
      { label: "Dezembro", value: 12 },
    ];
  }

  getTypeList() {
    return [
      { label: "Selecione...", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];
  }

  checkPosting = (filterPostingBy) => {
    let params = `?ano=${filterPostingBy.ano}`;

    if (filterPostingBy.mes) {
      params = `${params}&mes=${filterPostingBy.mes}`;
    }

    if (filterPostingBy.tipo) {
      params = `${params}&tipo=${filterPostingBy.tipo}`;
    }

    if (filterPostingBy.status) {
      params = `${params}&status=${filterPostingBy.status}`;
    }

    if (filterPostingBy.usuario) {
      params = `${params}&usuario=${filterPostingBy.usuario}`;
    }

    if (filterPostingBy.descricao) {
        params = `${params}&descricao=${filterPostingBy.descricao}`
    }

    return this.get(params);
  }
  deletePosting(id){
    return this.delete(`/${id}`)
  }
}
