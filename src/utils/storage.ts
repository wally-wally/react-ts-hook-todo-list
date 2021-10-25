const storage = {
  getItem(key: string) {
    return localStorage.getItem(key);
  },

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default storage;