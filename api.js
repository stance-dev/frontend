/**
 *
 */

export default class API {
  constructor() {
    this.host = ''
  }

  submitReport() {
    return new Promise((resolve, reject) => {
      return resolve();
      fetch(`${this.host}/report`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}
