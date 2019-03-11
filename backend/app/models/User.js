const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
const validate = require('mongoose-validator');
const {TE, to} = require('../services/UtilService');
const {CONFIG} = require('../../config');
const Document = require('./Document');

let UserSchema = mongoose.Schema({
    email: {
        type: String, lowercase: true, trim: true, index: true, unique: true, sparse: true,
        validate: [validate({
            validator: 'isEmail',
            message: 'Not a valid email.',
        }),]
    },
    password: {type: String},
}, {timestamps: true});

UserSchema.virtual('document', {
    ref: 'Documents',
    localField: '_id',
    foreignField: 'users.user',
    justOne: false,
});

UserSchema.methods.Documents = async function () {
    let err, documents;
    [err, documents] = await to(Document.find({'users.user': this._id}));
    if (err) TE('Ошибка получения документов');
    return documents;
};

UserSchema.methods.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE('Не указан пароль');

    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE('invalid password');

    return this;
};

UserSchema.methods.getJWT = function () {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return "Bearer " + jwt.sign({user_id: this._id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
};

UserSchema.methods.toWeb = function () {
    let json = this.toJSON();
    json.id = this._id;
    return json;
};

let User = module.exports = mongoose.model('User', UserSchema);