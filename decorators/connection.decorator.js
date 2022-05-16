"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const start_util_1 = require("../utils/start.util");
function Commands(classes) {
    return (constructor) => {
        (0, start_util_1.startSock)(classes);
    };
}
exports.Commands = Commands;
