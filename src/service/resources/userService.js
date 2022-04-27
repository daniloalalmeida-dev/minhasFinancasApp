import ApiService from "../api";

class UserService extends ApiService {
  constructor() {
    super(`/api/usuarios`);
  }

  authUser(signInData) {
    return this.post("/autenticar", signInData);
  }

  getAmountByUser(id) {
    return this.get(`/${id}/saldo`)
  }

  signUpNewUser(user) {
    return this.post('/', user)
  }

}

export default UserService;
