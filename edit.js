/** @flow */
export function post(endpoint, payload) {
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        credentials: 'same-origin'
    }).then(res => {
        if (res.status === 200)
          return res.json();
        return Promise.reject(new Error(res.statusText));
    });
}

export function update(endpoint, payload) {
    return fetch(endpoint + payload.id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        credentials: 'same-origin'
    }).then(res => {
        if (res.status === 200)
          return res.json();
        return Promise.reject(new Error(res.statusText));
    });
}

export function delete_(endpoint, payload) {
    return fetch(endpoint + payload.id, {
        method: 'DELETE',
        credentials: 'same-origin'
    }).then(res => {
        if (res.status === 200)
          return res.json();
        return Promise.reject(new Error(res.statusText));
    });
}