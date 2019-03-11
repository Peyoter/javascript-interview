const {User} = require('../models');
const authService = require('..//services/AuthService');
const {to, ReE, ReS} = require('../services/UtilService');

const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;
    if (!body.email) {
        return ReE(res, 'Укажите Email');
    } else if (!body.password) {
        return ReE(res, 'Введите пароль для регистраци.');
    } else {
        let err, user;

        [err, user] = await to(authService.createUser(body));

        if (err) return ReE(res, err, 422);
        return ReS(res, {message: 'Новый пользователь успшно создан', user: user.toWeb(), token: user.getJWT()}, 201);
    }
};

module.exports.create = create;

const getCurrent = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    return ReS(res, {user: user.toWeb()});
};

module.exports.getCurrent = getCurrent;

const login = async function (req, res) {
    const body = req.body;
    let err, user;

    [err, user] = await to(authService.authUser(body));
    if (err) return ReE(res, err, 422);

    return ReS(res, {token: user.getJWT(), user: user.toWeb()});
};

module.exports.login = login;