const {User} = require('../models');
const validator = require('validator');
const {to, TE} = require('../services/UtilService');

const createUser = async function (userInfo) {
    let err;
    if (!userInfo.email) TE('Email не был введен');
    if (!userInfo.password) TE('Не указан пароль');

    if (validator.isEmail(userInfo.email)) {
        [err, user] = await to(User.create(userInfo));
        if (err) TE('Такой пользователь уже есть в системе');
        return user;
    }
    else {
        TE('Был введен не валидный Email');
    }
};

module.exports.createUser = createUser;

const authUser = async function (userInfo) {//returns token
    let err;
    if (!userInfo.email) TE('Email не был введен');
    if (!userInfo.password) TE('Не указан пароль');

    let user;
    if (validator.isEmail(userInfo.email)) {
        [err, user] = await to(User.findOne({email: userInfo.email}));
        if (err) TE(err.message);
    } else {
        TE('Был введен не валидный Email');
    }

    if (!user) TE('Пользователь не зарегистрирован');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if (err) TE(err.message);

    return user;
};

module.exports.authUser = authUser;