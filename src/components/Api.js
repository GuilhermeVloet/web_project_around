export default class Api {
  constructor({ baseUrl, headers, token }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: this._method,
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
    });
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
    });
  }

  setPostCard({ title, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
      body: JSON.stringify({
        name: title,
        link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error: ${res.status}`);
    });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error: ${res.status}`);
    });
  }

  setLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error: ${res.status}`);
      })
      .then((data) => {
        return data;
      });
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error: ${res.status}`);
      })
      .then((data) => {
        return data;
      });
  }

  setEditProfile(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    });
  }
}
