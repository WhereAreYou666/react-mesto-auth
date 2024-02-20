class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
    this._contentType = options.headers["Content-Type"];
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkStatus(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkStatus(res));
  }

  setUserInfo(name, status) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        about: status,
      }),
    }).then((res) => this._checkStatus(res));
  }

  setNewCard(title, link) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then((res) => this._checkStatus(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": this._contentType,
      },
    }).then((res) => this._checkStatus(res));
  }

  setAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => this._checkStatus(res));
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}cards/likes/${id}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": this._contentType,
      },
    }).then((res) => this._checkStatus(res));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-77/",
  headers: {
    authorization: "2164bb6c-9763-4201-b1b8-719ccaf6ad3c",
    "Content-Type": "application/json",
  },
});

export default api;