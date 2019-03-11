const {Document} = require('../models');
const {to, ReE, ReS} = require('../services/UtilService');
const {CONFIG} = require('../../config');

const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, document;
    let user = req.user;
    let document_info = req.body;

    if (req.file == undefined) {
        return ReE(res, 'Ошибка загрузки файла', 422);
    }

    document_info.path = CONFIG.public_upload_path_pdf + req.file.filename;
    ;
    document_info.users = [{user: user._id}];

    [err, document] = await to(Document.create(document_info));
    if (err) return ReE(res, err, 422);

    return ReS(res, {document: document.toWeb()}, 201);
};
module.exports.create = create;

const getAll = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    let err, documents;
    [err, documents] = await to(user.Documents());

    let documents_json = [];
    for (let i in documents) {
        let document = documents[i];
        documents_json.push(document.toWeb())
    }
    return ReS(res, {documents: documents_json});
};

module.exports.getAll = getAll;

const remove = async function (req, res) {
    let document, err;
    let document_id = req.params.document_id;

    [err, document] = await to(Document.findOne({_id: document_id}));
    if (err) return ReE(res, "Документ не найден");

    [err, document] = await to(document.remove());
    if (err) return ReE(res, 'Ошибка удаления документа');

    return ReS(res, {message: 'Документ удалён'}, 204);
}

module.exports.remove = remove;