const mongoose = require('mongoose');
let DocumentShema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Название документа обязательно'],
        minlength: [1, 'Нельзя меньше 1 символа для заголовка'],
        maxlength: [100, 'Нельзя больше 100 символов для заголовка'],
    },
    description: {
        type: String,
        maxlength: [255, 'Нельзя больше 255 символов для описания']
    },
    path: {
        type: String,
        required: true
    },
    users: [{user: {type: mongoose.Schema.ObjectId, ref: 'User'}, permissions: [{type: String}]}],
}, {timestamps: true});

DocumentShema.methods.toWeb = function () {
    let json = this.toJSON();
    json.id = this._id;
    return json;
};

module.exports = mongoose.model('Document', DocumentShema);

