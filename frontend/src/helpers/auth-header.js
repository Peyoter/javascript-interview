export function authHeader() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': user.token };
    } else {
        return {};
    }
}

export function token() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return user.token;
    } else {
        return {};
    }
}