export default class LocalStorageService {
  
  static addItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static getLocalLoggedUser(key) {
      const item = localStorage.getItem(key)
    return JSON.parse(item);
  }
}
