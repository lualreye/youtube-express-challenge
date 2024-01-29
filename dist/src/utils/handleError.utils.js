"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleHttpError(res, message = 'Ooops something happened', code = 443) {
    res.status(code);
    res.send({ message });
}
exports.default = handleHttpError;
