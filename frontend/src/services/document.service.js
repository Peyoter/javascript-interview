import config from 'config';
import {authHeader, handleResponse, token} from '../helpers';

export const documentService = {
    getAll,
    remove,
    store
};

function getAll() {

    const requestOptions = {
        method: 'get',
        headers: {'Content-Type': 'application/json', 'Authorization': token()},
    };

    return fetch(`${config.apiUrl}/api/documents`, requestOptions)
        .then(handleResponse)
}

function remove(data) {
    const requestOptions = {
        method: 'delete',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/documents/` + data.id, requestOptions)
        .then(handleResponse)
}

function store(data) {

    const options = {
        method: 'POST',
        body: data,
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/documents`, options).then(handleResponse);
}