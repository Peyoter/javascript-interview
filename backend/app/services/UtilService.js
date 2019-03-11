const {to} = require('await-to-js');
const pe = require('parse-error');

const To = async (promise) => {
    let err, res;
    [err, res] = await to(promise);
    if (err) return [pe(err)];

    return [null, res];
};

module.exports.to = To;

const ReE = function (res, err, code) { // Error Web Response
    if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({success: false, error: err});
};

module.exports.ReE = ReE;

const ReS = function (res, data, code) { // Success Web Response
    let send_data = {success: true};

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data); //merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

module.exports.ReS = ReS;

const TE = function (err_message, log) { // TE Throw Error
    if (log === true) {
        console.error(err_message);
    }
    throw new Error(err_message);
};

module.exports.TE = TE;