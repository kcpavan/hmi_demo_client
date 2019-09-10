import { API_URL } from '../_constants';
import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  getAll
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'email': username, 'password': password })
    // body: JSON.stringify({ "user": { 'email': username, 'password': password } })
  };

  return fetch(`${API_URL}/api/v1/auth`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  localStorage.removeItem('user');
  return fetch(`${API_URL}/api/v1/auth`, requestOptions).then(handleResponse);
  // remove user from local storage to log user out
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${API_URL}/api/v1/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
