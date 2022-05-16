"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSock = void 0;
const baileys_1 = require("@adiwajshing/baileys");
const client_util_1 = require("./client.util");
async function startSock(classes) {
    const { version } = await (0, baileys_1.fetchLatestBaileysVersion)();
    const { state } = (0, baileys_1.useSingleFileAuthState)("./auth_info_multi.json");
    const sock = new client_util_1.Client({
        version,
        printQRInTerminal: true,
        auth: state,
    });
    sock.start(classes);
}
exports.startSock = startSock;
